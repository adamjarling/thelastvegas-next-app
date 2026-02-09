import HomePage from "./home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Last Vegas - Hard glam boogie rock from Chicago USA",
};

export default async function Page() {
  return <HomePage />;
}
