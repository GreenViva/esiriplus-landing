import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Terms & Policy",
  description:
    "eSIRIPlus patient legal pack — Privacy Policy, Data Security, Terms of Service, Medical Disclaimer, and Informed Consent for anonymous telemedicine in Tanzania.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
