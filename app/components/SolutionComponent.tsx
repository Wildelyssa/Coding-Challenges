import { Card, Flex } from "@radix-ui/themes";
import { IChallengeDetails } from "../data/challengeData";
import ChallengeDetails from "./ChallengeDetails";

const SolutionComponent = ({
  id,
  title,
  requirements,
  solution,
}: IChallengeDetails) => {
  return (
    <Flex direction="column" gap="4" className="h-full">
      <Card>
        <ChallengeDetails title={title} requirements={requirements} id={id} />
      </Card>
      <Card className="flex-1 overflow-auto">{solution()}</Card>
    </Flex>
  );
};

export default SolutionComponent;
