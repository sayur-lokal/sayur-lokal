import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export type PaginationState = {
    offset: number;
    page: number;
    limit: number;
    maxPage: number;
    total: number;
}

export const defaultPaginationState = (): PaginationState => {
    return {
        offset: 0,
        page: 3,
        limit: 10,
        maxPage: 10,
        total: 0
    }
}

export type PaginationDataState = {
    status: "init" | "loading" | "done";
    data: Product[];
    error?: string;
}

export const defaultPaginationDataState = (): PaginationDataState => ({
    status: "init",
    data: []
})

export type Query = {
    page: number;
    limit: number;
    sortCategory: "latest" | "best-selling" | "oldest"
}

export const defaultQuery = (): Query => ({
    page: 1,
    limit: 10,
    sortCategory: "latest"
})

export default function usePaginatedProducts() {
    const [ query, setQuery ] = useState<Query>(defaultQuery())
    const [ data, setData ] = useState<PaginationDataState>(defaultPaginationDataState())
    const [ pagination, setPagination ] = useState<PaginationState>(defaultPaginationState())
    
    const fetchData = async () => {
        try {
            const params = new URLSearchParams()
            if (query.page) {
                params.set("page", query.page.toString())
            }

            if (query.limit) {
                params.set("limit", query.limit.toString())
            }

            // if (query.sortCategory) {
            //     params.set("category", query.sortCategory)
            // }

            const res = await fetch(`/api/products?${params.toString()}`)
            if (!res.ok) {
                throw new Error(`the server responded with status ${res.status}`)
            }

            const {data, limit, page, total} = await res.json()
            setData({
                status: "done",
                data: data,
            })

            setPagination({
                limit: limit,
                page: page,
                maxPage: Math.ceil(total/limit),
                offset: page > 1 ? (page -1) * limit : 0,
                total,
            })

        } catch(e) {
            console.warn({e})
            const message = e instanceof Error ? e.message : `${e}`
            setData({
                status: "done",
                data: [],
                error: message,
            })
        }
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return {query, setQuery, data, pagination}
}
