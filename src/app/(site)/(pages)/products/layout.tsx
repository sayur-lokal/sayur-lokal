import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { ReactNode } from "react";
export const metadata: Metadata = {
    title: "Shop Page | sayurlokal",
    description: "This is Shop Page for sayurlokal",
    // other metadata
};

export default function Layout({ children }: { children: ReactNode; }) {
    return (
        <main>
            <Breadcrumb
                title={"Cari barang"}
                pages={["belanja", "/", "cari barang"]}
            />
            {children}
        </main>
    );
}