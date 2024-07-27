import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  posts: string;
};

export type Blog = {
  id: number;
  title: string;
  date: string;
  user: string;
};

export type Messages = {
  id: number;
  name: string;
  email: string;
  subject: string;
  status: string;
  message: string;
  date: string;
};

export type Amenities = {
  _id: string;
  name: string;
};

export type Property = {
  _id: string;
  type: string;
};

export type Locations = {
  id: number;
  name: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog Post 1",
    date: "2024-03-18T07:30:00.000Z",
    user: "User 1",
  },
  {
    id: 2,
    title: "Blog Post 2",
    date: "2024-03-18T07:30:00.000Z",
    user: "User 2",
  },
  {
    id: 3,
    title: "Blog Post 3",
    date: "2024-03-18T07:30:00.000Z",
    user: "User 3",
  },
  {
    id: 4,
    title: "Blog Post 4",
    date: "2024-03-18T07:30:00.000Z",
    user: "User 4",
  },
  {
    id: 5,
    title: "Blog Post 5",
    date: "2024-03-18T07:30:00.000Z",
    user: "User 5",
  },
];

export const amenities: Amenities[] = [
  { _id: "1", name: "Swimming Pool" },
  { _id: "2", name: "Gymnasium" },
  { _id: "3", name: "Parking Lot" },
  { _id: "4", name: "Playground" },
  { _id: "5", name: "Clubhouse" },
  { _id: "6", name: "Tennis Court" },
  { _id: "7", name: "Security Patrol" },
];

export const propertiesSubTypes: Property[] = [
  {
    _id: "jnelfl",
    type: "Residential",
  },
  {
    _id: "efnwknf",
    type: "Commercial",
  },
];

export const messages: Messages[] = [
  {
    id: 1,
    name: "User 1",
    email: "user1@example.com",
    subject: "Subject 1",
    status: "pending",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus interdum ligula, at rutrum magna laoreet et. Integer nec leo vitae odio ultricies feugiat. Sed consequat purus et ipsum sodales, sit amet vehicula elit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    date: "2024-03-18T10:10:44.179Z",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@example.com",
    subject: "Subject 2",
    status: "pending",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus interdum ligula, at rutrum magna laoreet et. Integer nec leo vitae odio ultricies feugiat. Sed consequat purus et ipsum sodales, sit amet vehicula elit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    date: "2024-03-18T10:10:44.181Z",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@example.com",
    subject: "Subject 3",
    status: "pending",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus interdum ligula, at rutrum magna laoreet et. Integer nec leo vitae odio ultricies feugiat. Sed consequat purus et ipsum sodales, sit amet vehicula elit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    date: "2024-03-18T10:10:44.181Z",
  },
  {
    id: 4,
    name: "User 4",
    email: "user4@example.com",
    subject: "Subject 4",
    status: "pending",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus interdum ligula, at rutrum magna laoreet et. Integer nec leo vitae odio ultricies feugiat. Sed consequat purus et ipsum sodales, sit amet vehicula elit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    date: "2024-03-18T10:10:44.181Z",
  },
  {
    id: 5,
    name: "User 5",
    email: "user5@example.com",
    subject: "Subject 5",
    status: "pending",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus interdum ligula, at rutrum magna laoreet et. Integer nec leo vitae odio ultricies feugiat. Sed consequat purus et ipsum sodales, sit amet vehicula elit vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    date: "2024-03-18T10:10:44.181Z",
  },
];

export const locations: Locations[] = [
  { id: 1, name: "New York" },
  { id: 2, name: "Los Angeles" },
  { id: 3, name: "Chicago" },
  { id: 4, name: "Houston" },
  { id: 5, name: "Phoenix" },
  { id: 6, name: "Philadelphia" },
  { id: 7, name: "San Antonio" },
  { id: 8, name: "San Diego" },
  { id: 9, name: "Dallas" },
  { id: 10, name: "San Jose" },
];

export const users: User[] = [
  {
    id: 1,
    name: "User 1",
    email: "user1@example.com",
    role: "User",
    posts: "posts 1",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@example.com",
    role: "Admin",
    posts: "posts 2",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@example.com",
    role: "User",
    posts: "posts 3",
  },
  {
    id: 4,
    name: "User 4",
    email: "user4@example.com",
    role: "Admin",
    posts: "posts 4",
  },
  {
    id: 5,
    name: "User 5",
    email: "user5@example.com",
    role: "User",
    posts: "Post 5",
  },
];

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "User",
    href: "/admin/user",
    icon: "user",
    label: "user",
  },
  {
    title: "Properties",
    href: "/admin/properties",
    icon: "property",
    label: "properties",
  },
  {
    title: "Property Types",
    href: "/admin/propertyTypes",
    icon: "propertyType",
    label: "properties",
  },
  {
    title: "Locations",
    href: "/admin/locations",
    icon: "location",
    label: "Locations",
  },
  {
    title: "Amenities",
    href: "/admin/amenities",
    icon: "amenities",
    label: "Amenties",
  },
  {
    title: "Blogs",
    href: "/admin/blogs",
    icon: "notebook",
    label: "blogs",
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: "message",
    label: "messages",
  },
];
