import PropTypes from "prop-types";
import classes from "./ProductItem.module.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import deleteIcon from "../../assets/deleteIcon.png";

export default function ProductItem({ id, productName, productPrice, productImage }) {
  const { addItemToTheCart, cartItemCounter, deleteItemFromCart } = useContext(ShopContext);
  const itemCount = cartItemCounter[id] > 0 ? ` (${cartItemCounter[id]})` : "";

  return (
    <article className={classes.ProductItem}>
      <img src={productImage} alt={`${productName}`} />
      <div className={classes.description}>
        <h2 className={classes.ProductName}>{productName}</h2>
        <p className={classes.ProductPrice}>{productPrice}</p>
        <div className={classes.AddAndDeleteBtn}>
          <button
            className={classes.AddToCart}
            onClick={() => addItemToTheCart(id)}
            aria-label={`Add ${productName} to cart`}
          >
            Add To Cart {itemCount}
          </button>

          <button
            className={classes.DeleteFromCart}
            onClick={() => deleteItemFromCart(id)}
            aria-label={`Delete ${productName} from cart`}
          >
            <img className={classes.Delete} src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>
    </article>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  productImage: PropTypes.string.isRequired,
};
