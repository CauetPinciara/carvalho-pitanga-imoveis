// pages/index.js
import { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Carvalho Pitanga Imóveis",
};

export default function Home() {
  return <HomePage />;
}
