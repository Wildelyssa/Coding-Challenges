export type IEvent = { title: string; date: string; location: string };

export const DATE_FORMAT = "MMM DD, YYYY";

// starter data
export const events: IEvent[] = [
  { title: "React Conference", date: "2025-09-15", location: "London" },
  { title: "Next.js Meetup", date: "2025-08-31", location: "Berlin" },
  { title: "Frontend Roundtable", date: "2025-10-05", location: "Online" },
];
