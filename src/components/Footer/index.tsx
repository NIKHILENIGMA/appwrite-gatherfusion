import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-4 text-center bg-gray-100 text-gray-800">
      &copy; {new Date().getFullYear()} Gatherfusion. All rights reserved.
    </footer>
  );
};

export default Footer;
