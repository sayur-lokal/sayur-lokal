import Breadcrumb from "@/components/Common/Breadcrumb";
import Dashboard from "./dashboard";

const SellerAdminPage = () => {
    return (
        <main>
            <Breadcrumb title={"Seller Dashboard"} pages={["seller dashboard"]} />

            <section className="overflow-hidden relative pb-20 lg:pt-10 xl:pt-14">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <Dashboard />
                </div>
            </section>
        </main>
    );
};

export default SellerAdminPage;