import { Card, Container, Flex, Heading, Separator } from "@radix-ui/themes";
import { IChallengeDetails } from "../data/challengeData";
import ChallengeDetails from "./ChallengeDetails";

const SolutionComponent = ({
  id,
  title,
  requirements,
  solution,
}: IChallengeDetails) => {
  return (
    <Flex direction="column" gap="4">
      <Card>
        <ChallengeDetails title={title} requirements={requirements} id={id} />
      </Card>
      <Card>{solution()}</Card>
    </Flex>
  );
};

export default SolutionComponent;
