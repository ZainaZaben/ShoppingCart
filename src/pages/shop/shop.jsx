import classes from "./shop.module.css";
import { PRODUCTS } from "../../data/products";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function Shop() {
  return (
    <div className={classes.Shop}>
      <div className={classes.productsDiv}>
        {PRODUCTS.map((product) => (
          <ProductItem
            key={`product ${product.id}`}
            id={product.id}
            productName={product.productName}
            productPrice={product.productPrice}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  );
}
