const User = ({
  name,
  email,
  companyName,
}: {
  name: string;
  email: string;
  companyName: string;
}) => {
  return (
    <div className="flex flex-col gap-1 bg-white/70 p-3 rounded-md grow">
      <p className="text-black">
        <strong>{name}</strong>
      </p>
      <div className="flex flex-col">
        <p className="text-black">{email}</p>
        <p className="text-black">{companyName}</p>
      </div>
    </div>
  );
};

export default User;
