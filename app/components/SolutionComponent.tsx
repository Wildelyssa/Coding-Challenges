import { IChallengeDetails } from "../data/challengeData";
import ChallengeDetails from "./ChallengeDetails";

// To do=>
// add styling for challenge wrapper

const SolutionComponent = ({
  id,
  title,
  requirements,
  solution,
}: IChallengeDetails) => {
  return (
    <div className="flex flex-col">
      <ChallengeDetails title={title} requirements={requirements} id={id} />
      {solution()}
      <hr></hr>
    </div>
  );
};

export default SolutionComponent;
