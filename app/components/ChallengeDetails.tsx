const ChallengeDetails = ({
  title,
  requirements,
}: {
  title: string;
  requirements: string[];
}) => {
  return (
    <div className="flex flex-col">
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
