import { ValidationError } from "@/types/errors";
import { Query, QueryResult, querySchema } from "./query";
import shopData from "@/components/Shared/DummyData/shopData";

export const parseProductQuery = (raw: any): Query => {
    const parsed = querySchema.safeParse(raw)
    if (!parsed.success) {
        throw new ValidationError(parsed.error.toString())
    }

    return parsed.data
}

export const queryProducts = async(query: Query): Promise<QueryResult> => {
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

        const total = filtered.length
        const start = (query.page - 1) * query.limit
        const end = start + query.limit
        const paginated = filtered.slice(start, end)
    
        return {
            products: paginated,
            total,
            page: query.page,
            limit: query.limit,
            totalPages: Math.ceil(total / query.limit),
            hasNextPage: end < total,
            hasPrevPage: start > 0,
            offset: start,
            sortBy: query.sortBy,
            sortOrder: query.sortOrder,
            category: query.category,
            priceMin: query.priceMin,
            priceMax: query.priceMax,
            name: query.name
        }
}



const hasAtleastOne = (a1: string[], a2: string[]): boolean => {
    for (const a of a1) {
        if (a2.includes(a)) {
            return true
        }

    }
    return false
}