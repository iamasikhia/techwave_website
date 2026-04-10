import Logistics from "@/assets/images/logistics.png"
import Edify from "@/assets/images/edify.jpg"
import Hello from "@/assets/images/hello.png"
import Clearline from "@/assets/images/clearline.png"
import Zikora from "@/assets/images/zikora.png"
import WatergatePic from "@/assets/images/watergate-pic.jpg"

export const works = [
    {
        image: WatergatePic,
        title: "Watergate Fountain",
        summary: "Watergate Fountain is a non-profit, free entrepreneurship and research training programme equipping Nigerians with vocational and business skills. We train people at no cost and provide accommodation and feeding throughout the programme. In four years, we have graduated 3,600 trainees: 2,600 entrepreneurs and 1,000 research students, creating meaningful employment pathways aligned with SDG 8: Decent Work and Economic Growth.",
        technologies: ["Entrepreneurship Training", "Research", "Mentorship"],
        link: "https://watergatefountain.techwaveafrica.com"
    },
    {
        image: Edify,
        title: "Edify",
        summary: "Founder consulted for Edify, a transformative initiative providing Christ-centered education to over 34,000 schools across Africa and Latin America, reaching 9 million+ children in 15+ countries. We led a capstone consultancy to integrate EdTech and AI into Edify's partner schools, designing scalable computer lab models, assessing country-level technology readiness, and mapping technology adoption for the years ahead.",
        technologies: ["EdTech", "AI Integration", "Research & Data Analysis"],
        link: "https://edify.org/"
    },
    {
        image: Logistics,
        title: "Logistics Hub",
        summary: "Techwave partnered with Logistics Hub to help bring one of their flagship enterprise products to market across Africa. We led the engineering team to design, develop, and launch a mobile application on iOS and Android using Flutter, achieving 1,000+ active riders. Our work contributed to raising $200,000+ in funding and generating $50,000+ in annual revenue, delivering real economic impact for riders and businesses across the continent.",
        technologies: ["Flutter", "iOS", "Android", "CI/CD"],
        link: "https://logisticshub.tech/"
    },
    {
        image: Clearline,
        title: "Clearline HMO",
        summary: "Techwave consulted for Clearline HMO, one of Nigeria's growing health insurance providers serving hundreds of thousands of businesses and individuals. We built their mobile app and website, creating a seamless digital experience that makes quality healthcare plans accessible to more Nigerians across the country.",
        technologies: ["Figma", "React", "React Native", "Node.js"],
        link: "https://clearlinehmo.com/"
    },
    {
        image: Hello,
        title: "Hello Money",
        summary: "We supported Hello Money in building a mobile-first fintech experience designed to make financial services simple and accessible for everyday Africans. The platform empowers users to manage their money, make payments, and access financial tools, all from their phones.",
        technologies: ["Figma", "React Native", "Node.js"],
        link: "https://www.hellomemoney.com/"
    },
    {
        image: Zikora,
        title: "Zikora",
        summary: "Techwave consulted for Zikora to help build their fintech product serving hundreds of thousands of customers across Africa. We worked to create a reliable, scalable platform that puts financial empowerment directly in the hands of African users, making savings, payments, and financial management truly accessible.",
        technologies: ["Figma", "React", "Node.js"],
        link: "https://www.zikorabank.com/"
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
