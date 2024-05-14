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
    console.log("response", response);

    if (response.data === "") {
        response.status = 404;
    }
    return response.data;
}