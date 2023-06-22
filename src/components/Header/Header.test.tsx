import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartResponse } from "../../hooks/useCart/types";
import { Header } from "./Header";

const WrappedHeader = ({ cart }: { cart?: CartResponse }) => {
  const value = {
    isLoading: false,
    cart: cart,
  };
  return (
    <CartContext.Provider value={value}>
      <Header />
    </CartContext.Provider>
  );
};

describe("Header tests", () => {
  it("should render title", () => {
    render(<WrappedHeader />, { wrapper: BrowserRouter });
    const title = screen.getByText(/Re-commerce/i);
    expect(title).toBeVisible();
  });

  it("should go to Home Page when click at title", () => {
    render(<WrappedHeader />, { wrapper: BrowserRouter });
    const title = screen.getByText(/Re-commerce/i);
    fireEvent.click(title);
    expect(window.location.pathname).toEqual("/");
  });

  it("should go to Cart Page when click at cart icon", () => {
    render(<WrappedHeader />, { wrapper: BrowserRouter });
    const cartIcon = screen.getByRole("button");
    fireEvent.click(cartIcon);
    expect(window.location.pathname).toEqual("/cart");
  });

  it("should render number 2 in badge", () => {
    const dummyData = {
      id: 1,
      userId: 1,
      date: "2023-01-01",
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
      ],
      __v: 1,
    };
    render(<WrappedHeader cart={dummyData} />, { wrapper: BrowserRouter });
    const badge = screen.getByText("2");
    expect(badge).toBeVisible();
  });

  it("should render number 4 in badge", () => {
    const dummyData = {
      id: 1,
      userId: 1,
      date: "2023-01-01",
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
        { productId: 2, quantity: 3 },
        { productId: 3, quantity: 4 },
      ],
      __v: 1,
    };
    render(<WrappedHeader cart={dummyData} />, { wrapper: BrowserRouter });
    const badge = screen.getByText("4");
    expect(badge).toBeVisible();
  });
});
