import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 PAAAJ Inc. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" to="/faq">
          FAQ
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" to="#">
          Terms of Service (Don't hack us)
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" to="#">
          Privacy (Don't hack others)
        </Link>
      </nav>
    </footer>
  );
};

export default footer;
