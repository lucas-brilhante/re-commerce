import { Button, Card, Col, notification, Space, Tooltip } from "antd";
import {
  StarFilled,
  DollarCircleFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { yellow, green } from "@ant-design/colors";
import useSWR from "swr";
import { ErrorAlert } from "../../components/ErrorAlert";
import { Loader } from "../../components/Loader";
import { fetcher } from "../../services";
import { Item } from "../../components/ItemCard";
import { useNavigate, useParams } from "react-router-dom";
import { ImgContainer, ItemsContainer, OrderButton } from "./styles";
import { convertNumberToUSD } from "../../lib/convertNumberToUSD";
import { addItemToCard } from "./api";
import { useState } from "react";
import { routes } from "../../routes";

export const Items = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string }>();
  const {
    data: item,
    error,
    isLoading,
  } = useSWR<Item>(`/products/${itemId}`, fetcher);
  const [isAdding, setIsAdding] = useState(false);

  const back = () => {
    navigate(-1);
  };

  const handleAddItem = async () => {
    try {
      setIsAdding(true);
      await addItemToCard({ itemId: Number(itemId), quantity: 1 });
      notification.success({
        message: "Success",
        description: "Item added successfully",
      });
      navigate(routes.cart);
    } catch (error) {
      const e = error as Error;
      notification.error({ message: "Error", description: e.message });
    } finally {
      setIsAdding(false);
    }
  };

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
          extra={
            <Tooltip title="Back">
              <Button type="text" icon={<ArrowLeftOutlined />} onClick={back} />
            </Tooltip>
          }
          actions={[
            <OrderButton
              type="primary"
              onClick={handleAddItem}
              loading={isAdding}
            >
              Add to cart
            </OrderButton>,
          ]}
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
