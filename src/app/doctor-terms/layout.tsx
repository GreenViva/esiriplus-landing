import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Terms & Agreement",
  description:
    "The eSIRIPlus Doctor Portal provider agreement — Provider Privacy Policy, Provider Terms of Service, Telemedicine Practice Guidelines, and Informed Provider Consent.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
