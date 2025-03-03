import React, { useState } from "react";
//import "./App.css";

// Example product list
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Headphones", price: 150 },
];

const Onlineshopping = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderSummary, setOrderSummary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = products.find((p) => p.id === parseInt(selectedProduct));
    const totalPrice = product.price * quantity;
    setOrderSummary(`
      Name: ${name}
      Email: ${email}
      Address: ${address}
      Product: ${product.name}
      Quantity: ${quantity}
      Total Price: $${totalPrice}
    `);
  };

  return (
    <div className="Onlineshopping">
      <h1>Online Shopping Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Shipping Address: </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="product">Select Product: </label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
          >
            <option value="">--Select--</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - ${product.price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <button type="submit">Place Order</button>
      </form>

      {orderSummary && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <pre>{orderSummary}</pre>
        </div>
      )}
    </div>
  );
};

export default Onlineshopping;
