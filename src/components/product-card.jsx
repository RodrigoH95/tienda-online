import { useLocation } from "wouter";

export const ProductCard = ({ product }) => {
    const [, navigate] = useLocation();

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    }

    return (
        <div className="product-card" key={product.id} onClick={handleClick}>
            <img className="product-image" src={product.image} alt={product.title} />
            <p className="product-title">{product.title}</p>
            <p className="product-price">$ {product.price}</p>
        </div>
    );
}