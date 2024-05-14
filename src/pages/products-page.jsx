import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productosService";
import { ProductCard } from "../components/product-card";

export const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <section className="productos-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
}