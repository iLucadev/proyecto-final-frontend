import axios from "axios";

const endpoints = {
  products: "http://localhost:3000/products",
  categories: "http://localhost:3000/categories",
};

const formatData = (data) => {
  return data.map((item) => {
    const date = new Date(item.created_at);
    const formattedDate = date.toLocaleDateString();

    return { ...item, created_at: formattedDate };
  });
};

const getAll = async () => {
  try {
    const responses = await axios.all([axios.get(endpoints.products), axios.get(endpoints.categories)]);

    const [productsResponse, categoriesResponse] = responses;
    const formattedProducts = formatData(productsResponse.data);

    return {
      products: formattedProducts,
      categories: categoriesResponse.data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getProducts = async (page, limit) => {
  try {
    const { data, headers } = await axios.get(`${endpoints.products}?_limit=${limit}&_page=${page}`);
    const formattedData = formatData(data);

    return { data: formattedData, headers };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCategories = async () => {
  try {
    const response = await axios.get(endpoints.categories);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${endpoints.products}/${id}`);
    const formattedData = formatData([response.data]);
    return formattedData[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const postProduct = async (data) => {
  try {
    const response = await axios.post(endpoints.products, data);
    console.log(response);
    /* return response.data; */
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const putProduct = async (data) => {
  try {
    const { id } = data;
    const response = await axios.put(`${endpoints.products}/${id}`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const removeProduct = async (productId) => {
  try {
    const response = await axios.delete(`${endpoints.products}/${productId}`);
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { formatData, getAll, postProduct, putProduct, removeProduct, getProducts, getProductById, getCategories };
