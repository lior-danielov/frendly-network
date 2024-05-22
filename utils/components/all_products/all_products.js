import { useState } from "react";
import "./all_products.css";

const AllProducts = () => {
  const [products, setProducts] = useState([
    { title: "Product 1", price: "$10", description: "Description 1" },
    { title: "Product 2", price: "$20", description: "Description 2" },
    // Add more products as needed
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    images: "",
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setShowPopup(false);
    setNewProduct({ title: "", price: "", category: "", images: "" });
  };

  return (
    <div className="all-products-container">
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <button className="fab" onClick={() => setShowPopup(true)}>
        +
      </button>
      {showPopup && (
        <div className="popup">
          <form onSubmit={handleAddProduct}>
            <label>
              Title:
              <input
                type="text"
                value={newProduct.title}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, title: e.target.value })
                }
                required
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                required
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                required
              />
            </label>
            <label>
              Images:
              <input
                type="text"
                value={newProduct.images}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, images: e.target.value })
                }
                required
              />
            </label>
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
