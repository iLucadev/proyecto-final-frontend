import PropTypes from "prop-types";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen gap-16 bg-orange-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
