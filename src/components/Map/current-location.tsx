import UseCurrentAddress from "./use-current-address";

const CurrentLocation = () => {
    const {state} = UseCurrentAddress()

    if (state.status == "loading") {
        return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">loading current address ...</a>
    }

    if (state.status == "not available" || state.status == "not found") {
        return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">Deliver to Jakarta, Indonesia</a>
    }

    if (state.status == "error") {
        return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">Location service error: ${state.error}</a>
    }

    return <a className="flex items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-[#D75A4A] cursor-pointer hover:underline">Deliver to {state.address}</a>
}

export default CurrentLocation;