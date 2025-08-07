import { ReactNode } from "react";
import TweetBox from "../components/solutions/TweetBox/TweetBox";
import ToDoList from "../components/solutions/ToDo/ToDoList";

export type IChallengeDetails = {
  id: string;
  title: string;
  requirements: string[];
  solution: () => ReactNode;
};

export const challenges: IChallengeDetails[] = [
  {
    id: "tweet-box",
    title: `Create a simple React component called <TweetBox> that includes:`,
    requirements: [
      `A <textarea> for inputting text.`,
      "Use basic CSS for this challenge",
      "A character counter below the text area.",
      "A warning when the character count exceeds 280.",
      "A submit button that only enables when the character count is between 1 and 280.",
      "On submit, show the tweet below the box (simulating a post).",
    ],
    solution: () => <TweetBox />,
  },
  {
    id: "to-do-list",
    title: "Build a Todo List app with the following features:",
    requirements: [
      "Filter the list to show: All todos, Only active (not completed), Only completed",
      "Each todo item should display its text and a checkbox to toggle completion.",
      "Three filter buttons: All, Active, and Completed to control which todos are shown.",
      "Use TypeScript interfaces/types where appropriate (e.g., Todo type).",
      "Use React hooks (useState, optionally useEffect).",
    ],
    solution: () => <ToDoList />,
  },
];
