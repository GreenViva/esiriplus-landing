import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account & Data",
  description:
    "How to delete your eSIRIPlus account and associated data — from inside the app or by email — what is removed, and the records we must retain under Tanzanian law.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
