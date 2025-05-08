import UseCurrentAddress from "./use-current-address";
import { LoaderCircle, MapPin, MapPinOff, MapPinX } from "lucide-react"

const CurrentLocation = () => {
    const {state} = UseCurrentAddress()

    if (state.status == "loading") {
        return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">
            <LoaderCircle className="w-4 h-4 animate-spin" />
            loading current address ...</a>
    }

    if (state.status == "not available" || state.status == "not found") {
        return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">
            <MapPinOff className="w-4 h-4 animate-bounce" />
            Deliver to Jakarta, Indonesia</a>
    }

    if (state.status == "error") {
        return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">
            <MapPinX className="w-4 h-4" />
            Location service error: ${state.error}</a>
    }

    return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">
        <MapPin className="w-4 h-4" />
        Deliver to {state.address}
        </a>
}

export default CurrentLocation;