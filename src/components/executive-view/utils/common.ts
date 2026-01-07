export const getSentimentEmoji = (sentiment: string): string => {
  switch (sentiment) {
    case "positive":
      return "😊";
    case "neutral":
      return "😐";
    case "negative":
      return "😞";
    default:
      return "😐";
  }
};
