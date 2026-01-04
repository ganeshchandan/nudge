export type Suggestions = { text: string; id: string };
export type Helpers = { text: string; id: string };

export interface NudgeAIProps {
  suggestions?: Suggestions[];
  helpers?: Helpers[];
}