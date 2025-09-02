import { challenges } from "@/app/data/challengeData";
import { navLinks } from "@/app/data/navLinks";
import SolutionComponent from "../SolutionComponent";
import { Card, Tabs } from "@radix-ui/themes";
import { capitalizeAll } from "@/app/lib/display";

const SideNavigation = () => {
  return (
    <Tabs.Root
      orientation="vertical"
      defaultValue={navLinks[0].id}
      className="w-full h-full flex flex-row justify-start gap-4"
    >
      <Card className="h-full flex-shrink-0">
        <Tabs.List
          color="crimson"
          className="flex flex-col gap-2 w-full"
          highContrast
        >
          {navLinks.map((navLink, i) => (
            <Tabs.Trigger key={i} value={navLink.id}>
              {capitalizeAll(navLink.name)}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Card>
      <div className="flex-1 h-full">
        {challenges.map((challenge, i) => (
          <Tabs.Content className="w-full h-full" key={i} value={challenge.id}>
            <SolutionComponent
              id={challenge.id}
              title={challenge.title}
              requirements={challenge.requirements}
              solution={challenge.solution}
              key={i}
            />
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
};

export default SideNavigation;
