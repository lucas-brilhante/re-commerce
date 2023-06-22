import { Alert, Layout } from "antd";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { Home } from "./pages/Home";
import { Items } from "./pages/Items";
import { ErrorAlert } from "./components/ErrorAlert";
import { MaxWidthLimiter } from "./components/MaxWidthLimiter";
import "./index.css";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <BrowserRouter>
          <Header />
          <div style={{ height: 64 }} />
          <Content>
            <MaxWidthLimiter>
              <Alert
                style={{ margin: "16px 0", width: "100%" }}
                message="Attention"
                description="This app uses the public api: https://fakestoreapi.com/ and all adding, updating and removing actions don't change the database. The use of api is just to simulate a integration with a real api."
                type="warning"
                closable
              />
            </MaxWidthLimiter>
            <MaxWidthLimiter>
              <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.cart} element={<Cart />} />
                <Route path={routes.item} element={<Items />} />
                <Route
                  path="*"
                  element={<ErrorAlert description="Page not found!" />}
                />
              </Routes>
            </MaxWidthLimiter>
          </Content>
        </BrowserRouter>
      </Layout>
    </CartProvider>
  );
}

export default App;
