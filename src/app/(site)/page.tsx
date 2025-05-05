import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayur Lokal",
  description: "This is Home for Sayur Lokal",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
