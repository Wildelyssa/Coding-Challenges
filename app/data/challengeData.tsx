import { ReactNode } from "react";
import TweetBox from "../components/solutions/TweetBox/TweetBox";
import ToDoList from "../components/solutions/ToDo/ToDoList";
import SearchableUsers from "../components/solutions/SearchableUsers/SearchableUsers";
import PaginatedCatList from "../components/solutions/PaginatedList/PaginatedCatList";

export type IChallengeDetails = {
  id: string;
  title: string;
  requirements: string[];
  details?: string[];
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
      "Should be able to add or remove a todo from the list with an input box and add button",
      "Each todo item should display its text and a checkbox to toggle completion.",
      "Use TypeScript interfaces/types where appropriate (e.g., Todo type).",
      "Use React hooks (useState, optionally useEffect).",
    ],
    solution: () => <ToDoList />,
  },
  {
    id: "searchable-users",
    title: `You’re building a simple “User Directory” component for an admin dashboard. It should:`,
    requirements: [
      "Display a list of users (provided as a prop) with their name and email.",
      "Include a text input to filter users by name (case-insensitive).",
      "If no users match, display an accessible “No results found” message.",
      "Use Tailwind for styling.",
      "Ensure the component is type-safe with TypeScript.",
    ],
    solution: () => <SearchableUsers />,
  },
  {
    id: "paginated-list",
    title: `Paginated List with 'Load More'. Create a component that:`,
    requirements: [
      "Displays a list of items in pages of 5 at a time.",
      `Has a 'Load More' button to fetch and show the next page of items.`,
      "Disables or hides the button when there are no more items to load.",
      "Uses a mock async fetch function to simulate an API call with a small delay.",
    ],
    details: [
      "Use functional components and React hooks.",
      "Written in TypeScript with proper typing for props, state, and functions.",
      "Use a hardcoded array of at least 20 strings (or objects if you want to model real data).",
      "The “fetch” function should:",
      "Accept page and pageSize arguments.",
      "Return a Promise that resolves with the slice of data after a 500ms delay.",
      "Show a loading state while fetching the next page.",
      "The first page should load automatically when the component mounts.",
    ],
    solution: () => <PaginatedCatList />,
  },
];
