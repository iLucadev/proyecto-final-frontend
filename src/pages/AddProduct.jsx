import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getCategories, postProduct } from "../helpers/crud";
import Form from "../components/Form";

export default function AddProduct() {
  const navigate = useNavigate();

  const categories = useLoaderData();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    unit_price: "",
    quantity: "",
  });

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
    await postProduct(dataToSend);

    navigate("/");
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <div className="container flex flex-col gap-8 mx-auto xl:max-w-6xl grow">
      <h1 className="text-2xl font-semibold text-left">{"Add new product"}</h1>
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

export const categoriesLoader = async () => {
  const categories = await getCategories();

  return categories;
};
