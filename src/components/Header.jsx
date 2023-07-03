import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container h-16 mx-auto border-b-2 xl:max-w-6xl border-cyan-950 text-cyan-950">
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          Brand
        </Link>
        <div></div>
      </div>
    </header>
  );
};
