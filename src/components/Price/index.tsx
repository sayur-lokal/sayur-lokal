const Price = ({ price, className }: { price: number; className?: string }) => {
    const formatted = new Intl.NumberFormat("en-ID", { style: "currency", currency: "IDR" }).format(price)
    return (
        <>
            <span className={className}>{formatted}</span>
        </>
    );
};

export default Price