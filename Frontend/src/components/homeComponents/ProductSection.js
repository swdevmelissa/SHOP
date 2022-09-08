import products from "../../dumpData/Products";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row">
              {products.map((product) => (
                <div>
                  <div className="border-product">
                    <Link to={`products/${[product.id]}`}>
                      <div className="shopBack">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </Link>

                    <div>
                      <p>
                        <Link to={`products/${[product.id]}`}>
                          {product.name}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
