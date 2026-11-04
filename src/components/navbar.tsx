import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";

const navLinks = [
  { label: "Wishlist", href: "/wishlist", icon: <FaRegHeart /> },
  { label: "Cart", href: "/cart", icon: <HiOutlineShoppingBag /> },
  { label: "Login", href: "/login", icon: <FaRegUser /> },
];

const Navbar = () => {
  return (
    <header className="border border-b border-border bg-bg">
      <nav aria-label="main-navigation"className="mx-auto w-full max-w-370 flex items-center justify-between gap-6 px-6 py-4 md:px-8">
        <div className="flex flex-1 items-center gap-6">
            <Link href="/" className="text-xl font-bold tracking-tight">Shop</Link>
            <div className="hidden w-full max-w-sm md:block">
                <input type="search" placeholder="Search products..." aria-label="search-products"
                className="min-h-11 w-full rounded-input border border-border px-4 text-sm" />
            </div>
        </div>
        <ul className="flex shrink-0 items-center gap-4 sm:gap-6">
          {navLinks.map((item) => {
            return(
                <li key={item.href}>

                    <Link href={item.href}  className="flex items-center gap-1 font-medium text-sm hover:underline" ><span>{item.icon}</span>{item.label}</Link>
                </li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
