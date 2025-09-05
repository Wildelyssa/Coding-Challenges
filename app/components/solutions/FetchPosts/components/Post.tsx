const Post = ({
  title,
  body,
  userId,
}: {
  title: string;
  body: string;
  userId: string;
}) => {
  return (
    <div className="flex flex-col w-full bg-white/70 rounded-md gap-2 text-black p-4 hover:bg-white/50">
      <p>@{userId}</p>
      <p className="font-bold text-lg">{title}</p>
      <p className="text-md">{body}</p>
    </div>
  );
};

export default Post;
