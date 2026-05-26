import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "eSIRIPlus's Refund Policy explains when consultation fees are refundable, how escrow protects patients and doctors, and how to request a refund.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
