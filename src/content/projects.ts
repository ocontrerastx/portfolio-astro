export type Role = "UX" | "PM" | "DEV";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  roles: Role[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Buyer's App",
    description:
      "Creating native iOS and Android apps to help wholesale car buyers purchase vehicles",
    image:
      "https://cdn.dribbble.com/userupload/9341516/file/original-5c90e4bae90e9c42dcf2aaf0b71e03cd.png",
    roles: ["UX", "PM"],
    featured: true,
  },
  {
    id: "2",
    title: "Georgia Tech Capacity",
    description: "A web-based platform for managing inventory and auctions.",
    image:
      "https://cdn.dribbble.com/userupload/17935894/file/original-3e9e29883fa5ba3bb5c6579b989a0f0f.png",
    roles: ["UX"],
    featured: true,
  },
  {
    id: "3",
    title: "Survey Site",
    description: "A web-based platform for managing inventory and auctions.",
    image:
      "https://cdn.dribbble.com/userupload/34994274/file/original-007f8f05903c2f655007dc5106524660.png",
    roles: ["UX", "PM"],
    featured: true,
  },
];
