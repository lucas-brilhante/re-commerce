import { Layout } from "antd";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { Home } from "./pages/Home";
import { Items } from "./pages/Items";
import { ErrorAlert } from "./components/ErrorAlert";
import { MaxWidthLimiter } from "./components/MaxWidthLimiter";
import "./index.css";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>
        <MaxWidthLimiter>
          <BrowserRouter>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.item} element={<Items />} />
              <Route
                path="*"
                element={<ErrorAlert description="Page not found!" />}
              />
            </Routes>
          </BrowserRouter>
        </MaxWidthLimiter>
      </Content>
    </Layout>
  );
}

export default App;
