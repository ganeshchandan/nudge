import { type FC, useEffect, useMemo, useRef, useState } from "react";
import "@components/common/orbit/index.scss";
import { useOrbit } from "@components/common/orbit/hook";
import CenterLogo from "@components/common/orbit/center-logo";
import { UI_TIMING } from "@components/common/orbit/constants";
import OrbitLevel from "@components/common/orbit/orbit-level";
import {
  defaultOrbitConfig,
  type JsonHierarchyData,
  type OrbitConfig,
  type Person,
} from "@components/common/orbit/types";
import {
  getResponsiveSize,
  getLevelAnimationOrderMap,
} from "@components/common/orbit/utils";

interface OrbitProps {
  config?: Partial<OrbitConfig>;
  showAllConnections: boolean;
  setShowAllConnections: React.Dispatch<React.SetStateAction<boolean>>;
  hierarchyJsonData: JsonHierarchyData;
}

export const Orbit: FC<OrbitProps> = ({
  config: userConfig,
  showAllConnections,
  setShowAllConnections,
  hierarchyJsonData,
}) => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const { loading, hierarchy, loadData } = useOrbit();
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const config: OrbitConfig = useMemo(
    () => ({
      ...defaultOrbitConfig,
      ...userConfig,
      visual: { ...defaultOrbitConfig.visual, ...userConfig?.visual },
      sentiment: { ...defaultOrbitConfig.sentiment, ...userConfig?.sentiment },
      interaction: {
        ...defaultOrbitConfig.interaction,
        ...userConfig?.interaction,
      },
      layout: { ...defaultOrbitConfig.layout, ...userConfig?.layout },
      dataSource: {
        ...defaultOrbitConfig.dataSource,
        ...userConfig?.dataSource,
      },
    }),
    [userConfig]
  );

  // Load hierarchy from JSON
  useEffect(() => {
    loadData(hierarchyJsonData, config);
  }, [config]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const orbitElement = orbitRef.current;
        if (orbitElement) {
          const { width, height } = orbitElement.getBoundingClientRect();
          setWindowSize({
            width,
            height,
          });
        }
      }, UI_TIMING.RESIZE_DEBOUNCE);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const responsiveSize = getResponsiveSize(
    hierarchy,
    config.layout,
    windowSize
  );

  const levelAnimationOrderMap = getLevelAnimationOrderMap(hierarchy);

  const allPeople = useMemo(() => {
    if (!hierarchy) return new Map<string, Person>();
    const peopleMap = new Map<string, Person>();
    hierarchy.levels.forEach((level) => {
      level.nodes.forEach((node) => {
        peopleMap.set(node.person.id, node.person);
      });
    });
    if (hierarchy.centerPerson) {
      peopleMap.set(hierarchy.centerPerson.id, hierarchy.centerPerson);
    }
    return peopleMap;
  }, [hierarchy]);

  const handleNodeClick = (personId: string) => {
    const person = allPeople.get(personId);
    if (person) {
      setSelectedPerson(person);
      setShowAllConnections(true);
    }
  };

  // const handleNodeHover = useCallback(
  //   (personId: string | null) => {
  //     // setHoveredPerson(personId ? allPeople.get(personId) || null : null);
  //   },
  //   [allPeople]
  // );

  if (loading) {
    return (
      <div
        className="orbit-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  const noOfLevels = hierarchy.levels.length;
  const everyRadius = responsiveSize / 2 / noOfLevels;

  return (
    <div
      ref={orbitRef}
      className="orbit-container"
      style={{
        // width: `${responsiveSize}px`,
        // height: `${responsiveSize}px`,
        minWidth: `${responsiveSize}px`,
        minHeight: `${responsiveSize}px`,
        position: "relative",
      }}
    >
      {hierarchy.levels.map((hierarchyLevel) => {
        const { level } = hierarchyLevel;
        const animationOrder = levelAnimationOrderMap.get(level) || 0;
        return (
          <div
            key={level}
            className="orbit-level-wrapper"
            style={{ zIndex: noOfLevels - level }}
          >
            <OrbitLevel
              level={hierarchyLevel}
              connections={hierarchy.connections}
              allPeople={allPeople}
              config={config}
              levelAnimationOrder={animationOrder}
              onNodeClick={
                config.interaction.enableClick ? handleNodeClick : undefined
              }
              // onNodeHover={
              //   config.interaction.enableHover ? handleNodeHover : undefined
              // }
              selectedPersonId={selectedPerson?.id || null}
              // hoveredPersonId={hoveredPerson?.id || null}
              showAllConnections={showAllConnections}
              radius={everyRadius * (level + 1)}
            />
          </div>
        );
      })}

      {/* Center logo */}
      {hierarchy.centerPerson && (
        <div className="orbit-center">
          <CenterLogo
            logoText={hierarchy.centerPerson.name}
            config={config}
            onClick={
              config.interaction.enableClick
                ? () => handleNodeClick(hierarchy.centerPerson!.id)
                : undefined
            }
          />
        </div>
      )}
    </div>
  );
};
