import Rating from "../components/homeComponents/Rating";
import Header from "../components/Header";
import products from "../dumpData/Products";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  return (
    <>
      <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p>{product.description}</p>

              <div className="product-count col-lg-7">
                <div className="flex-box align-items-center justify-content-between">
                  <h6>Price:</h6>
                  <span>${product.price}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-box">
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Out of Stock</span>
                  )}
                </div>
                <div className="d-flex justify-content-between align-items-center flex-box">
                  <h6>Reviews</h6>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
                {product.countInStock > 0 ? (
                  <>
                    <div className="d-flex justify-content-between align-items-center flex-box">
                      <h6>Quantity</h6>
                      <select>
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button className="round-black-btn"> Add To Cart</button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Rating section*/}
        <div className="row my-5">
          <div className="col-md-6">
            <h6>REVIEWS</h6>
            <span variant={"alert-info mt-3"}>No Reviews yet!</span>
            <div className="mb-5 bg-light p-3 shadow-sm rounded mb-md-3">
              <strong>Melisa</strong>
              <Rating />
              <span>September 19 2022</span>
              <div className="alert alert-info mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>Write a review</h6>
            <div className="my-4"></div>

            <form>
            <div className="my-4">
                <strong>Rating</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="my-4">
                <strong>Comment</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="my-3">
                <Link to="/login">
                    <strong>LOGIN</strong>
                </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
