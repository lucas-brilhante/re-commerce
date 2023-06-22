import { List, Typography } from "antd";
import { useContext } from "react";
import { ErrorAlert } from "../../components/ErrorAlert";
import { Loader } from "../../components/Loader";
import { CartContext } from "../../context/CartContext";
import { useDetailedCart } from "../../hooks/useDetailedCart";
import { ProductItem } from "./ProductItem/ProductItem";
import { CartContainer } from "./styles";

export const Cart = () => {
  const { cart: data } = useContext(CartContext);
  const { cart, isLoading, error } = useDetailedCart(data);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorAlert description={error?.message} />;
  }

  return (
    <CartContainer>
      <List
        loading={isLoading}
        style={{ width: 700 }}
        header={<Typography.Text>My Cart</Typography.Text>}
        bordered
        dataSource={cart?.products}
        renderItem={(item) => <ProductItem item={item} />}
      />
    </CartContainer>
  );
};
