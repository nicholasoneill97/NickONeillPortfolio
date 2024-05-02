
//import links for nav links
import Link from "next/link";

//specifies that each link will contain that link's href and title
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-bold block py-2 pl-3 pr-4 text-secondary  sm:text-xl rounded md:p-0 hover:text-[#5b5b61] hover:border-b border-primary-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;