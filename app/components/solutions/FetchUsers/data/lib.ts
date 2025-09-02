// types
export type ICompanyDetails = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type IUser = {
  id: number;
  name: string;
  email: string;
  company: ICompanyDetails;
};

export type ISortBy = "name-asc" | "name-desc" | "company-asc" | "company-desc";

// data
export const sortOptions: ISortBy[] = [
  "name-asc",
  "name-desc",
  "company-asc",
  "company-desc",
];
