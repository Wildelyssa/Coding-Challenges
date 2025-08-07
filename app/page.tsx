import { Heading } from "@radix-ui/themes";
import SideNavigation from "./components/navigation/SideNavigation";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen px-40 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center justify-stretch">
        <Heading as="h1">Coding Challenges</Heading>
        <SideNavigation />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
