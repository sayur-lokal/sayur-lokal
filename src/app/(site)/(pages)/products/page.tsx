import Products from "@/components/Products";
import Loading from "@/components/Products/Loading";
import { Query, querySchema } from "@/components/Products/query";
import shopData from "@/components/Shared/DummyData/shopData";
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


const hasAtleastOne = (a1: string[], a2: string[]): boolean => {
    for (const a of a1) {
        if (a2.includes(a)) {
            return true
        }

    }
    return false
}

// TODO: replace with actual API call
const queryProducts = async (query: Query): Promise<any[]> => {
    await sleep(1000);

    let filtered = [...shopData]
    if (query.priceMin) {
        filtered = filtered.filter(product => product.price >= query.priceMin!)
    }

    if (query.priceMax) {
        filtered = filtered.filter(product => product.price <= query.priceMax!)
    }

    if (query.category.filter(c => !!c).length > 0) {
        filtered = filtered.filter(product => hasAtleastOne(product.category, query.category))
    }

    
    if (query.sortBy) {
        filtered.sort((a,b) => {
            switch (query.sortBy) {
                case "date":
                    return new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? 1 : -1
                case "discount":
                    return a.discountedPrice > b.discountedPrice ? 1 : -1
                case "price":
                    return a.price > b.price ? 1 : -1
                case "sales":
                    // TODO: sales should have its own calculation
                case "rating":
                    return a.reviews.reduce((n, c) => {
                        return n + c.rating
                    }, 0) > b.reviews.reduce((n, c) => {
                        return n + c.rating
                    }, 0) ? 1 : -1
                case "name":
                    return a.title > b.title ? 1 : -1
                default:
                    return a.price > b.price ? 1 : -1
            }
        })
    }

    const isDescending = query.sortOrder == "desc"

    if (!isDescending) {
        filtered.reverse()
    }

    return filtered
}

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}