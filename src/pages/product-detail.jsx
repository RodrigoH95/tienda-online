import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter"
import { getProductById } from "../services/productosService";
import { ProductDetailCard } from "../components/product-detail-card";

export const ProductDetail = () => {
    const { id } = useParams();

    const [_, navigate] = useLocation();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(id).then((data) => {
            if (data) {
                setProduct(data);
            }
            else {
                navigate('/404');
            }
        });
    }, [id]);

    return <>
        {(product.id) && <ProductDetailCard {...product} />}
    </>
}