import Price from "@/components/Price";

const Product = ({ name, price }: { name: string, price: number; }) => {
    return (
        <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
                <p className="text-dark">{name}</p>
            </div>
            <div>
                <p className="text-dark text-right">
                    <Price price={price} />
                </p>
            </div>
        </div>
    );
};

export default Product;