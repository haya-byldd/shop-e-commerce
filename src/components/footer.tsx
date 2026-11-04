import Link from "next/link";

const Footer = () => {
  return (
    <footer aria-label="footer" className="bg-surface py-2">
      <div className="mx-auto w-full max-w-370 h-full px-6 py-4 md:px-8 flex items-center justify-center">
        <div className="space-y-4 text-center">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Shop
          </Link>
          <p className="text-fg-muted text-sm max-w-2xs ">
          © 2026 Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
