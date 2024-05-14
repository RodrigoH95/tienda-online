import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter"
import { getProductById } from "../services/productosService";

export const ProductDetail = () => {
    const { id } = useParams();

    const [_, navigate] = useLocation();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(id).then((data) => {
            setProduct(data);
        });
    }, [id]);

    return (
        <>
            <div className="product-container">
                <section className="product-detail">
                    <div className="product-detail-image">
                        <img className="product-image" src={product.image} alt={product.title} />
                    </div>
                    <div className="product-detail-info">
                        <h1 className="detail-title">{product.title}</h1>
                        <p className="detail-description">{product.description}</p>
                        <p className="detail-price">$ {product.price}</p>
                        <div className="btn-container">
                            <button className="btn btn-comprar">Buy Now</button>
                            <button className="btn btn-regresar" onClick={() => navigate('/')}>Go Back</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );

}