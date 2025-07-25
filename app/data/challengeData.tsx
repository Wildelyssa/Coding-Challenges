import { ReactNode } from "react";
import TweetBox from "../components/solutions/TweetBox/TweetBox";

export type ChallengeDetails = {
  id: string;
  title: string;
  requirements: string[];
  solution: () => ReactNode;
};

export const challenges: ChallengeDetails[] = [
  {
    id: "1",
    title: `Create a simple React component called <TweetBox> that includes:`,
    requirements: [
      `A <textarea> for inputting text.`,
      "A character counter below the text area.",
      "A warning when the character count exceeds 280.",
      "A submit button that only enables when the character count is between 1 and 280.",
      "On submit, show the tweet below the box (simulating a post).",
    ],
    solution: () => <TweetBox />,
  },
];
