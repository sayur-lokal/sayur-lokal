import { ReactNode } from "react";
import { type Menu } from "@/types/Menu";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Dropdown from "@/components/Header/Dropdown";
import Link from "next/link";

const menuData: Menu[] = [
    {
        id: 1,
        title: "Dashboard Pages",
        newTab: false,
        path: "/seller-admin",
        submenu: [
            {
                id: 2,
                title: "Analytics",
                newTab: false,
                path: "/seller-admin",
            },
            {
                id: 3,
                title: "Manage Orders",
                newTab: false,
                path: "/seller-admin/orders",
            },
            {
                id: 4,
                title: "Manage Products",
                newTab: false,
                path: "/seller-admin/products",
            }
        ]
    }
]

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <main>
            <Breadcrumb title="Seller Dashboard" pages={["seller dashboard"]} />

            <section className="overflow-hidden relative pb-20 lg:pt-10 xl:pt-14">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex flex-col gap-4  ">
                    <div className="w-fit">
                        <PageSelector/>
                    </div>
                    {children}
                </div>
            </section>
        </main>
    )
}


const PageSelector = () => {
    return (
        <nav>
            <ul>
            {menuData.map((menuItem, i) =>
                    menuItem.submenu ? (
                      <Dropdown
                        key={i}
                        menuItem={menuItem}
                        stickyMenu={true}
                      />
                    ) : (
                      <li
                        key={i}
                        className="group relative before:w-0 before:h-[3px] before:bg-[#6BAF92] before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full "
                      >
                        <Link
                          href={menuItem.path || "#"}
                          className={`hover:text-[#6BAF92] text-custom-sm font-medium text-dark flex`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    )
                  )}
            </ul>
        </nav>
    )
}

export default Layout