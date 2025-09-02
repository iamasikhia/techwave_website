import Logistics from "@/assets/images/logistics.png"
import Mantled from "@/assets/images/mantled.png"
import Centri from "@/assets/images/centri.png"
import Hello from "@/assets/images/hello.png"
import Unilag from "@/assets/images/unilag.png"
import Clearline from "@/assets/images/clearline.png"
import Delivery from "@/assets/images/delivery.png"
import Zikora from "@/assets/images/zikora.png"

export const works = [
    {
        image: Logistics,
        title: "Logistics Hub",
        summary: "We consulted for a logistics company who were looking to build a mobile app to help its riders easily accept and complete orders. We also worked with them to deliver a client and admin platform to control the orders, riders, customers and more.",
        technologies: ["Figma", "React", "Node js"]
    },
    {
        image: Mantled,
        title: "Mantled",
        summary: "We consulted for a real estate entrepreneur who was looking to build an asset management tool. We developed a mobile app, its official website and web App for those accustomed to bigger screens.",
        technologies: ["Figma", "React", "React native"]
    },
    {
        image: Clearline,
        title: "Clearline",
        summary: "We consulted for a logistics company who were looking to build a mobile app to help its riders easily accept and complete orders. We also worked with them to deliver a client and admin platform to control the orders, riders, customers and more.",
        technologies: ["Figma", "React", "Node.js"]
    },
    {
        image: Unilag,
        title: "Unilag Alumni",
        summary: "Techwave consulted for one of the leading public universities to build a website, mobile app and admin app to run specific needed tasks for its alumni association.",
        technologies: ["Figma", "React", "React Native", "Node js"]
    },
    {
        image: Hello,
        title: "Hello Money Mobile App",
        summary: "We consulted for a logistics company who were looking to build a mobile app to help its riders easily accept and complete orders. We also worked with them to deliver a client and admin platform to control the orders, riders, customers and more.",
        technologies: ["Figma", "React", "Node js"]
    },
    {
        image: Centri,
        title: "CentriSync",
        summary: "We consulted for a logistics company who were looking to build a mobile app to help its riders easily accept and complete orders. We also worked with them to deliver a client and admin platform to control the orders, riders, customers and more.",
        technologies: ["Figma", "React", "Node.js"]
    },
    {
        image: Delivery,
        title: "Delivery Connect",
        summary: "We consulted for a logistics company who were looking to build a mobile app to help its riders easily accept and complete orders. We also worked with them to deliver a client and admin platform to control the orders, riders, customers and more.",
        technologies: ["Figma", "React", "Node js"]
    },
    {
        image: Zikora,
        title: "Zikora",
        summary: "We consulted for a real estate entrepreneur who was looking to build an asset management tool. We developed a mobile app, its official website and web App for those accustomed to bigger screens.",
        technologies: ["Figma", "React", "Node js"]
    },
]

export interface IUser {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: IUser;
  token: string;
  message: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}

export class ApiErrorResponse extends Error {
  statusCode: number;
  error?: string;

  constructor(message: string, statusCode: number, error?: string) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
    this.name = "ApiErrorResponse";
  }
}

export interface CreateBlog{
    title: string;
    summary?: string;
    content: string;
    thumbnail: File;
    tags: string[];
}

export interface Blog {
  id: number;
  userId: number;
  uuid: string;
  title: string;
  summary: string;
  content: string;
  thumbnail: string;
  isPublished: boolean;
  tags: string[];
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaginatedBlogData {
  items: Blog[];
  page: number;
  pageSize: number;
  total: number;
  pageCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  search: string;
}
