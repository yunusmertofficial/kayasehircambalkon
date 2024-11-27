import Link from "next/link";

const LinkButton = ({
  label,
  href,
  bgColor,
}: {
  label: string;
  href: string;
  bgColor?: string;
}) => {
  return (
    <Link
      href={href}
      passHref
      className={`px-6 py-3 ${
        bgColor || "bg-blue-500"
      } text-white text-lg font-semibold rounded-lg hover:brightness-110 transition`}
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
