import React, { type FC } from "react";
import "@components/executive-view/detailed-view/content/profile-category/index.scss";

interface ProfileCategoryItem {
  field_name: string;
  field_value: string | string[] | any;
}

interface ProfileCategoryProps {
  otherFields?: ProfileCategoryItem[];
  selectedQuickLinkId?: string;
}

export const ProfileCategory: FC<ProfileCategoryProps> = ({
  otherFields = [],
  selectedQuickLinkId,
}) => {
  // Find the field that matches the selected quick link
  const selectedField = React.useMemo(() => {
    if (!selectedQuickLinkId || otherFields.length === 0) {
      return otherFields.length > 0 ? otherFields[0] : null;
    }

    // Try to match by field_name (converting to various formats)
    const normalizedQuickLinkId = selectedQuickLinkId
      .toLowerCase()
      .replace(/\s+/g, "_");

    return (
      otherFields.find((field) => {
        const normalizedFieldName = field.field_name.toLowerCase();
        // Match exact field_name, or check if field_name contains the quick link id
        return (
          normalizedFieldName === normalizedQuickLinkId ||
          normalizedFieldName.includes(normalizedQuickLinkId) ||
          normalizedQuickLinkId.includes(normalizedFieldName)
        );
      }) || otherFields[0]
    );
  }, [selectedQuickLinkId, otherFields]);

  const renderFieldValue = (
    value: string | string[] | any
  ): React.ReactNode => {
    // Handle empty arrays
    if (Array.isArray(value) && value.length === 0) {
      return <div className="empty-field">No data available</div>;
    }

    // Handle string values
    if (typeof value === "string") {
      // Check if it's a URL
      if (value.startsWith("http://") || value.startsWith("https://")) {
        return (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="field-link"
          >
            {value}
          </a>
        );
      }
      return <div className="field-text">{value}</div>;
    }

    // Handle array of strings
    if (
      Array.isArray(value) &&
      value.length > 0 &&
      typeof value[0] === "string"
    ) {
      return (
        <ul className="field-list">
          {value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    // Handle array of objects (like GT_tags)
    if (
      Array.isArray(value) &&
      value.length > 0 &&
      typeof value[0] === "object"
    ) {
      return (
        <div className="field-object-list">
          {value.map((item: any, index: number) => (
            <div key={index} className="field-object-item">
              {Object.entries(item).map(([key, val]) => (
                <div key={key} className="field-object-field">
                  <span className="field-object-key">
                    {formatFieldName(key)}:
                  </span>
                  <span className="field-object-value">{String(val)}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    // Fallback: JSON stringify for any other object
    if (typeof value === "object" && value !== null) {
      return <pre className="field-json">{JSON.stringify(value, null, 2)}</pre>;
    }

    return <div className="field-text">{String(value)}</div>;
  };

  const formatFieldName = (fieldName: string): string => {
    // Convert snake_case to Title Case
    return fieldName
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="profile-category-container">
      <div className="profile-category-content">
        {selectedField ? (
          <div className="profile-category-content-wrapper">
            <div className="profile-category-content-title">
              {formatFieldName(selectedField.field_name)}
            </div>
            <div className="profile-category-content-text">
              {renderFieldValue(selectedField.field_value)}
            </div>
          </div>
        ) : (
          <div className="profile-category-content-empty">
            No profile data available
          </div>
        )}
      </div>
    </div>
  );
};
