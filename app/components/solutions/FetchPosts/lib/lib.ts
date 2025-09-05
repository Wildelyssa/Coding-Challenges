// types

export type ApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type IPost = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

// helper functions
export const getUniqueUserIds = (posts: IPost[]) => {
  return [...new Set(posts.map((post) => post.userId))];
};
