import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-16 bg-orange-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
