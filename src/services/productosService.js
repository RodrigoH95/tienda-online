import axios from "axios";

// API docs -> https://fakestoreapi.com/docs

const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
});

export const getAllProducts = async () => {
    const response = await instance.get("/products");
    return response.data;
}

export const getProductById = async (id) => {
    const response = await instance.get(`/products/${id}`);
    return response.data;
}

export const getAllCategories = async () => {
    const response = await instance.get("/categories");
    return response.data;
}

export const getProductsByCategory = async (category) => {
    const response = await instance.get(`/products/category/${category}`);
    return response.data;
}