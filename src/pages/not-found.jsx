import { useLocation } from "wouter";

export const NotFound = () => {
    const [_, navigate] = useLocation();
    return (
            <div className="not-found-container">
                <h1>404 - Not Found</h1>
                <img className="not-found-image" src="./not-found.png" alt="page not found image" />
                <p>The page you are looking for does not exist!</p>
                <div className="btn-container">
                    <button className="btn btn-regresar" onClick={() => navigate('/')}>Go Back</button>
                </div>
            </div>
    );
}