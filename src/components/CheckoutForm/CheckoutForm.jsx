import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const CheckoutForm = ({ onSubmit, onCancel, setShowCheckoutForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email });
    setName("");
    setEmail("");
    setShowCheckoutForm(false);
    alert(`Thanks ${name}, your order has been submitted successfully!`);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <p>To complete the order, please fill in your information:</p>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <div className="submit-and-cancel-buttons">
        <button type="submit">Submit Order</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

CheckoutForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onCancel: PropTypes.func.isRequired, 
  setShowCheckoutForm: PropTypes.func.isRequired, 
};

export default CheckoutForm;
