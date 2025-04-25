import { User } from "@/lib/user"
import { hashPassword, compareHash } from "./auth"
import { ERR_USER_NOT_FOUND, ERR_PASSWORD_NOT_MATCH } from './auth'

const createMockUser = async ({name, role, email, password}: {name: string, role: "admin" | "seller" | "buyer", email: string, password: string}): Promise<User> => {
    const hashedPassword = await hashPassword(password)
    return {
        id:name, name, role, email, hashed_password: hashedPassword
    }
}

const getMockedUsers = async (): Promise<User[]> => await Promise.all(["admin:admin@sayurlokal.id:admin", "seller:seller@sayurlokal.id:seller", "buyer:buyer@sayurlokal.id:buyer"].map((user) => {
    const [name, email, password] = user.split(":")
    const role = name as "admin" | "buyer" | "seller"
    return createMockUser({name, email, role, password})
}))

export const getMockedUser = async(userID: string): Promise<User | null> => {
    const users = await getMockedUsers()
    const index = users.findIndex(user => user.id == userID)
    if (index == -1) {
        return null
    }

    return {...users[index], hashed_password: undefined}
}

export const mockAuth = async ({email, password}: {email: string, password: string}): Promise<User> => {
    const users = await getMockedUsers()
    const index = users.findIndex(u => u.email == email)
    if (index == -1) {
        throw ERR_USER_NOT_FOUND
    }

    const user =  users[index]
    if (!compareHash(user.hashed_password, password)) {
        throw ERR_PASSWORD_NOT_MATCH
    }

    return user
}