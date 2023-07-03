import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import Table from "../components/Table";
import Pager from "../components/Pager";
import { getCategories, getProducts } from "../helpers/crud";

export default function Dashboard() {
  const { productsData } = useLoaderData();

  const [tableData, setTableData] = useState(productsData);
  const [page, setPage] = useState(1);
  const totalItems = Number(productsData.headers["x-total-count"]);
  const limit = 10;

  function handlePageChange(page) {
    setPage(page);
  }

  useEffect(() => {
    const renewTable = async () => {
      const newProductsToShow = await getProducts(page, limit);

      setTableData(newProductsToShow);
    };

    renewTable();
  }, [page]);

  return (
    <div className="container flex flex-col gap-8 mx-auto xl:max-w-6xl grow">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link to="/new">
          <Button color={"positive"}>+ Add</Button>
        </Link>
      </div>
      <Table products={tableData.data} totalItems={totalItems} limit={limit} handlePageChange={handlePageChange} />
      <Pager currentPage={page} totalItems={totalItems} limit={limit} handlePageChange={handlePageChange} />
    </div>
  );
}

export const dashboardLoader = async (page, limit) => {
  const [productsData, categories] = await Promise.all([getProducts(page, limit), getCategories()]);

  return { productsData, categories };
};
