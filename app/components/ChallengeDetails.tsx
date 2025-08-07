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
    // To do=> use challenge id for navigation references
    <div id={id} className="flex flex-col">
      <h2>{title}</h2>
      <ul>
        {requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeDetails;
