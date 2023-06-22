import { Space } from "antd";
import useSWR from "swr";
import { ErrorAlert } from "../../components/ErrorAlert";
import { Loader } from "../../components/Loader";
import { fetcher } from "../../services";
import { Item, ItemCard } from "../../components/ItemCard";
import { generatePath, Link } from "react-router-dom";
import { routes } from "../../routes";

export const Home = () => {
  const { data, error, isLoading } = useSWR<Item[]>("/products", fetcher);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorAlert description={error?.message} />;
  }

  return (
    <Space wrap>
      {data?.map((item) => {
        const path = generatePath(routes.item, { itemId: item.id });
        return (
          <Link to={path} key={item.id}>
            <ItemCard item={item} />
          </Link>
        );
      })}
    </Space>
  );
};
