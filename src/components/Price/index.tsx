const Price = ({ price }: { price: number; }) => {
    const formatted = new Intl.NumberFormat("en-ID", { style: "currency", currency: "IDR" }).format(price)
    return (
        <>
            <span>{formatted}</span>
        </>
    );
};

export default Price