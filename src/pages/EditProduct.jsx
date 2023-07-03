import { useState } from "react";
import Form from "../components/Form";
import { getCategories, getProductById, putProduct } from "../helpers/crud";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { productData, categories } = useLoaderData();

  const [formData, setFormData] = useState(productData);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleFormSubmit() {
    // Esto se debe poner en el post y agregar un edited_at: en put
    const dataToSend = {
      ...formData,
      created_at: new Date().toISOString(),
    };

    await putProduct({ id, ...dataToSend });

    navigate("/");
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <div className="container flex flex-col gap-8 mx-auto xl:max-w-6xl grow">
      <h1 className="text-2xl font-semibold text-left">{"Edit product"}</h1>
      <Form
        data={formData}
        handleFormSubmit={handleFormSubmit}
        handleFormChange={handleFormChange}
        handleCancel={handleCancel}
        categories={categories}
      />
    </div>
  );
}

export const productLoader = async ({ params }) => {
  const { id } = params;

  const [productData, categories] = await Promise.all([getProductById(id), getCategories()]);

  return { productData, categories };
};
