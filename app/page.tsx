import { Heading } from "@radix-ui/themes";
import SideNavigation from "./components/navigation/SideNavigation";

// to do=> responsive styles for mobile

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "var(--accent-1)" }}
      className="flex flex-col font-sans h-screen gap-4"
    >
      <div className="flex flex-row items-center justify-center py-4">
        <Heading align="center" as="h1">
          Coding Challenges
        </Heading>
      </div>
      <main className="flex h-full gap-8 mx-4 xl:w-[80%] self-center">
        <SideNavigation />
      </main>
      <footer
        style={{ backgroundColor: "var(--accent-4)" }}
        className="h-[40px]"
      />
    </div>
  );
}
