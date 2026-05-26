import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection Policy",
  description:
    "The technical and organizational safeguards eSIRIPlus uses to protect health information — encryption, access controls, data location, retention, and breach response.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
