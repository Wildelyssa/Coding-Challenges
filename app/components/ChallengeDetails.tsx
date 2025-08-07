import { Flex, Heading } from "@radix-ui/themes";

const ChallengeDetails = ({
  id,
  title,
  requirements,
}: {
  id: string;
  title: string;
  requirements: string[];
}) => {
  return (
    <Flex id={id} direction="column" gap="4">
      <Heading as="h2">{title}</Heading>
      <ul>
        {requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>
    </Flex>
  );
};

export default ChallengeDetails;
