import PropTypes from "prop-types";
import Button from "./Button";

import { removeProduct } from "../helpers/crud";
import { useNavigate } from "react-router-dom";

export default function Table({ products, totalItems, limit, handlePageChange }) {
  const navigate = useNavigate();

  function handleEditButton(productId) {
    navigate(`/edit/${productId}`);
  }

  async function handleDeleteProduct(productId) {
    await removeProduct(productId);

    const pagesCount = Math.ceil(totalItems / limit);

    if (pagesCount === 1) {
      handlePageChange(1);
    }
  }

  return (
    <table className="w-full table-fixed">
      <thead className="text-center border-b-2 border-cyan-950">
        <tr>
          <th className="pb-2">{"Product"}</th>
          <th className="pb-2">{"Category"}</th>
          <th className="pb-2">{"Created"}</th>
          <th className="pb-2">{"Unit"} price</th>
          <th className="pb-2">{"Stock"}</th>
          <th className="pb-2"></th>
        </tr>
      </thead>
      <tbody className="text-left">
        {products.map((product) => {
          return (
            <tr key={product.id} className="">
              <td className="py-2 align-top">{product.name}</td>
              <td className="py-2 align-top">{product.category}</td>
              <td className="py-2 text-center align-top">{product.created_at}</td>
              <td className="py-2 text-right align-top">{`$ ${product.unit_price}`}</td>
              <td className="py-2 text-right align-top">{product.quantity}</td>
              <td className="py-2 space-x-4 text-right align-top">
                <Button
                  color="negative"
                  func={(e) => {
                    e.preventDefault();
                    handleEditButton(product.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  color="warning"
                  func={(e) => {
                    e.preventDefault();
                    handleDeleteProduct(product.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  products: PropTypes.array,
  totalItems: PropTypes.number,
  limit: PropTypes.number,
  handlePageChange: PropTypes.func,
};
