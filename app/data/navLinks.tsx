import { challenges } from "./challengeData";

export type INavItem = {
  id: string;
  name: string;
};

export const navLinks: INavItem[] = challenges.map((item) => {
  return {
    id: item.id,
    name: item.id.replaceAll("-", " "),
  };
});
