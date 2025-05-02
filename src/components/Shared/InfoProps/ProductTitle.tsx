import Link from "next/link";

const ProductTitle = ({
  title,
  link,
  onClick,
}: {
  title: string;
  link?: string;
  onClick?: () => void;
}) => {
  const titleElement = (
    <h3
      className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5"
      onClick={onClick}
    >
      {title}
    </h3>
  );

  return link ? <Link href={link}>{titleElement}</Link> : titleElement;
};

export default ProductTitle;
