import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";

const Content = ({ displayMode, shopData }: { displayMode: "grid" | "list", shopData: any[]; }) => {
    if (!shopData || shopData.length === 0) {
        return (
            <div className="flex items-center justify-center h-96">
                <p className="text-lg text-gray-500">No products found</p>
            </div>
        );
    }

    if (displayMode == "grid") {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9">
                {shopData.map((item, key) => <SingleGridItem item={item} key={key} />)}
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-7.5">
            {shopData.map((item, key) => <SingleListItem item={item} key={key} />)}
        </div>
    );
};

export default Content;