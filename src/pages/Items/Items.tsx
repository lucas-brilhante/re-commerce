import { Card, Col, Space } from "antd";
import { StarFilled, DollarCircleFilled } from "@ant-design/icons";
import { yellow, green } from "@ant-design/colors";
import useSWR from "swr";
import { ErrorAlert } from "../../components/ErrorAlert";
import { Loader } from "../../components/Loader";
import { fetcher } from "../../services";
import { Item } from "../../components/ItemCard";
import { useParams } from "react-router-dom";
import { ImgContainer, ItemsContainer, OrderButton } from "./styles";
import { convertNumberToUSD } from "../../lib/convertNumberToUSD";

export const Items = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const {
    data: item,
    error,
    isLoading,
  } = useSWR<Item>(`/products/${itemId}`, fetcher);

  console.log("data", item);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorAlert description={error?.message} />;
  }

  if (!item) {
    return <ErrorAlert description="Item not found!" />;
  }

  return (
    <ItemsContainer gutter={[16, 16]}>
      <Col flex="500px">
        <ImgContainer>
          <img alt={item.title} src={item.image} />
        </ImgContainer>
      </Col>
      <Col flex="1">
        <Card
          title={item.title}
          actions={[<OrderButton type="primary">Add to cart</OrderButton>]}
        >
          <p>{item.description}</p>
          <Space size={32}>
            <Space align="center">
              <StarFilled style={{ color: yellow[5] }} />
              <p style={{ fontSize: 16 }}>
                <b>Rating: </b>
                {item.rating.rate} ({item.rating.count})
              </p>
            </Space>
            <Space align="center">
              <DollarCircleFilled style={{ color: green[5] }} />
              <p style={{ fontSize: 16 }}>
                <b>Price: </b> {convertNumberToUSD(item.price)}
              </p>
            </Space>
          </Space>
        </Card>
      </Col>
    </ItemsContainer>
  );
};
