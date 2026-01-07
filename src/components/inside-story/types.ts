export interface PersonDetailCard {
  id: string;
  image: string;
  name: string;
  teamName: string;
  priorities: {
    headerName: string;
    subHeader: string;
    items: string[];
  };
  status: {
    label: string;
    type: "positive" | "negative";
  };
}

export interface KeyStakeholdersWorkingWith {
  name: string;
  image: string;
  description: string;
  position: string;
  responsibility: string;
}
