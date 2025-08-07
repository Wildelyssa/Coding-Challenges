import { challenges } from "@/app/data/challengeData";
import { navLinks } from "@/app/data/navLinks";
import SolutionComponent from "../SolutionComponent";
import { Card, Flex, Tabs } from "@radix-ui/themes";
import { capitalizeAll } from "@/app/lib/display";

const SideNavigation = () => {
  return (
    <Tabs.Root
      orientation="vertical"
      defaultValue={navLinks[0].id}
      className="w-full flex flex-row justify-start gap-4"
    >
      <Card>
        <Tabs.List color="crimson" className="flex flex-col gap-2" highContrast>
          {navLinks.map((navLink, i) => (
            <Tabs.Trigger className="w-full" key={i} value={navLink.id}>
              {capitalizeAll(navLink.name)}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Card>

      {challenges.map((challenge, i) => (
        <Tabs.Content className="w-full" key={i} value={challenge.id}>
          <SolutionComponent
            id={challenge.id}
            title={challenge.title}
            requirements={challenge.requirements}
            solution={challenge.solution}
            key={i}
          />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default SideNavigation;
