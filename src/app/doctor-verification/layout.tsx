import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Verification Policy",
  description:
    "How eSIRIPlus verifies every doctor before they see a patient — license checks against the Medical Council of Tanganyika, credential review, and the standards providers must continue to meet.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
