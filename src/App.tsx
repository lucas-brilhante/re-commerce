import { Layout } from "antd";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { Home } from "./pages/Home";
import "./index.css";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.teste} element={<span>teste</span>} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;
