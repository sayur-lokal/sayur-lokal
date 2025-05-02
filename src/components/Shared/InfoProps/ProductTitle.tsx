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
  <Link href={link} onClick={onClick}>
  <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
    {title}
  </h3>
  </Link>
);

export default ProductTitle;