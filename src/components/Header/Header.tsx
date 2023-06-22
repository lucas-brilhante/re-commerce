import { Badge, Button } from "antd";
import { MaxWidthLimiter } from "../MaxWidthLimiter";
import { HeaderContainer, HeaderContent, Title } from "./styles";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Header = () => {
  const { cart, isLoading } = useContext(CartContext);

  return (
    <HeaderContainer>
      <MaxWidthLimiter>
        <HeaderContent>
          <Link to={routes.home}>
            <Title>Re-commerce</Title>
          </Link>

          <Badge count={cart ? cart.products.length : 0} showZero={!isLoading}>
            <Link to={routes.cart}>
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                disabled={isLoading}
              />
            </Link>
          </Badge>
        </HeaderContent>
      </MaxWidthLimiter>
    </HeaderContainer>
  );
};
