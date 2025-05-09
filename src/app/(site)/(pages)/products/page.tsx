import Products from "@/components/Products";
import Loading from "@/components/Products/Loading";
import { Query, querySchema } from "@/lib/products/query";
import { queryProducts } from "@/lib/products/query-products";
import { Suspense } from "react";

export default async function Page({ searchParams }: { searchParams: Promise<any>; }) {
    const params = await searchParams;
    const query = querySchema.safeParse(params);

    if (!query.success) {
        console.warn({err: query.error})
        return <p className="mt-15">Invalid query {query.error.toString()}</p>;
    }

    const queryKey = JSON.stringify(query.data);
    
    // return <Loading />
    return <Suspense key={queryKey} fallback={<Loading />}>
        <ProductsLoader query={query.data} />
    </Suspense>
    
};

async function ProductsLoader({query}: { query: Query; }) {
    const products = await queryProducts(query);

    return <Products products={products} />;
}
