const CharacterCount = ({
  characterCount,
  characterLimit,
}: {
  characterCount: number;
  characterLimit: number;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        border: "solid 1px black",
      }}
    >
      <p>{`${characterCount} / ${characterLimit}`}</p>
    </div>
  );
};

export default CharacterCount;
