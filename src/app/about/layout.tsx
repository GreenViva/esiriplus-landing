import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About eSIRIPlus",
  description:
    "Learn about eSIRIPlus's mission to make quality healthcare accessible to every Tanzanian through our telemedicine platform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
