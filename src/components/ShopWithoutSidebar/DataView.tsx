import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import { PaginationDataState } from "@/hooks/UsePaginatedProducts";

const DataView = ({ state, productStyle }: { state: PaginationDataState, productStyle?: "grid" | "list"; }) => {
    const style = productStyle ? productStyle : "grid";

    if (state.status == "loading" || state.status == "init") {
        return (<p>loading data ...</p>);
    }

    if (state.error) {
        return (<p>{state.error}</p>);
    }

    return (
        <div
            className={`${productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
        >
            {state.data.map((item, key) =>
                style === "grid" ? (
                    <SingleGridItem item={item} key={key} />
                ) : (
                    <SingleListItem item={item} key={key} />
                )
            )}
        </div>
    );
};

export default DataView;