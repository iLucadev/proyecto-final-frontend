import { Footer } from "../components/Footer";
import { NavLink, Outlet } from "react-router-dom";

export const ProductsLayout = () => {
  return (
    <div className="flex flex-col min-h-screen gap-16 bg-orange-50">
      <header>
        <h1>Welcome</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};
