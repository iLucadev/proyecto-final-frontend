import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
/* import Login from "./pages/Login"; */
import RootLayout from "./layouts/RootLayout";
import AddProduct, { categoriesLoader } from "./pages/AddProduct";
import EditProduct, { productLoader } from "./pages/EditProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={dashboardLoader} />
      <Route path="new" element={<AddProduct />} loader={categoriesLoader} />
      <Route path="edit/:id" element={<EditProduct />} loader={productLoader} />
      {/*  <Route path="login" element={<Login />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// Queda en deuda la autenticacion

export default function App() {
  return <RouterProvider router={router} />;
}
