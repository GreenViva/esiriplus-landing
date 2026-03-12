import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "eSIRIPlus's Terms of Service outline the rules and guidelines for using our telemedicine platform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
