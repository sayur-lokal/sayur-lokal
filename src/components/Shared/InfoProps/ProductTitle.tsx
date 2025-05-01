import Link from "next/link";

const ProductTitle = ({
  title,
  link,
  onClick,
}: {
  title: string;
  link: string;
  onClick?: () => void;
}) => (
  <h3
    className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5"
    onClick={onClick}
  >
    <Link href={link}>{title}</Link>
  </h3>
);

export default ProductTitle;