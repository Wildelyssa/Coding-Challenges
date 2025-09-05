import { ReactNode } from "react";
import TweetBox from "../components/solutions/TweetBox/TweetBox";
import ToDoList from "../components/solutions/ToDo/ToDoList";
import SearchableUsers from "../components/solutions/SearchableUsers/SearchableUsers";
import PaginatedCatList from "../components/solutions/PaginatedList/PaginatedCatList";
import ConnectFour from "../components/solutions/ConnectFour/ConnectFour";
import SeatFinder from "../components/solutions/SeatFinder/SeatFinder";
import PetCollector from "../components/solutions/PetCollector/PetCollector";
import EventsList from "../components/solutions/EventsList/EventsList";
import FetchUsers from "../components/solutions/FetchUsers/FetchUsers";
import FetchPosts from "../components/solutions/FetchPosts/FetchPosts";

export type IChallengeDetails = {
  id: string;
  title: string;
  requirements: string[];
  details?: string[];
  bonus?: string[];
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
  {
    id: "connect-four",
    title: `Build a simple 6x7 grid Connect Four game where two players take turns dropping pieces into columns:`,
    requirements: [
      "The board should start as empty (null values).",
      "Players take turns: Red → Yellow → Red → …",
      "Detect when a player wins (4 in a row horizontally, vertically, or diagonally).",
      `When the game ends, show a message: "Red wins!" or "Yellow wins!"`,
      "Add a reset button to clear the board.",
    ],
    bonus: [
      "Highlight the winning cells.",
      "Prevent moves after the game ends.",
      "Handle full columns gracefully.",
    ],
    solution: () => <ConnectFour />,
  },
  {
    id: "seat-finder",
    title: `Implement the handleBookSeat function using a for loop:`,
    requirements: [
      "Start at the last index of the array (row.length - 1)",
      "Work backwards until you find the first null",
      `Replace it with "X" and update the state`,
    ],

    solution: () => <SeatFinder />,
  },
  {
    id: "pet-collector",
    title: `You’re running a pet hotel with 10 kennels. Each kennel can hold Cat ("C"), Dog ("D"), Empty (null):`,
    requirements: [
      "Start with all kennels empty.",
      `Add Cat button → put "C" into the first empty kennel from the left.`,
      `Add Dog button → put "D" into the first empty kennel from the right.`,
      `If no space is left for the animal, show a message ("No kennels left for cats!" or "No kennels left for dogs!")`,
    ],

    solution: () => <PetCollector />,
  },
  {
    id: "events-list",
    title: `You are given an array of event objects. Each event has a title, date, and location. Your task is to:`,
    requirements: [
      "Render a list of upcoming events sorted by date (soonest first).",
      `Display each event with its title, formatted date (e.g., "Aug 30, 2025"), and location.`,
      `Add a filter input to only show events where the title includes the entered text (case-insensitive).`,
      `(Optional Bonus: Add a message if no events match the filter.)`,
    ],

    solution: () => <EventsList />,
  },
  {
    id: "fetch-users",
    title: `You are given an API endpoint that returns a list of users- use https://jsonplaceholder.typicode.com/users).`,
    requirements: [
      "Fetch users on component mount (use useEffect).",
      `Display them in a simple list/table with: Name, Email, Company name.`,
      `Add a search input that filters users by name or email (case-insensitive).`,
      `Add a sort dropdown that lets you sort by: Name (A → Z, Z → A), Company name (A → Z, Z → A). Use useMemo to avoid unnecessary recalculations when filtering/sorting.`,
    ],
    bonus: [
      "Use useCallback for handlers to avoid unnecessary re-renders.",
      "Add a loading and error state for the API call.",
      "Add a skeleton loader or spinner for loading state.",
      "Add a retry button for error state.",
    ],
    solution: () => <FetchUsers />,
  },
  {
    id: "fetch-posts",
    title: `Build a React component that fetches posts from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts) and lets the user:`,
    requirements: [
      "View posts (title + body).",
      `Paginate through them (e.g., 10 per page, with "Next" and "Previous" buttons).`,
      `Filter by userId (add a dropdown with numbers 1–10, since posts have userIds 1–10).`,
      `Handle loading and error states.`,
      `Add a "Retry" button on errors`,
    ],
    solution: () => <FetchPosts />,
  },
];
