import { Button, Input, List, notification, Space, Typography } from "antd";
import { red, yellow } from "@ant-design/colors";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { convertNumberToUSD } from "../../../lib/convertNumberToUSD";
import { ImgContainer, ListItemContainer } from "./styles";
import type { ProductItemProps } from "./types";
import { updateItem } from "./api";

export const ProductItem = ({ item }: ProductItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    const valueAsNumber = Number(value) || 1;
    setQuantity(valueAsNumber);
  };

  const handleUpdate = async () => {
    try {
      setIsUpdating(true);
      await updateItem({ cartId: 1, itemId: item.id, quantity, userId: 1 });
      notification.success({ message: "Success", description: 'Item updated successfully' });
    } catch (error) {
      const e = error as Error;
      notification.error({ message: "Error", description: e.message });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await updateItem({ cartId: 1, itemId: item.id, quantity: 0, userId: 1 });
      notification.success({ message: "Success", description: 'Item removed successfully' });
    } catch (error) {
      const e = error as Error;
      notification.error({ message: "Error", description: e.message });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <List.Item>
      <ListItemContainer>
        <Space>
          <ImgContainer>
            <img alt={item.title} src={item.image} />
          </ImgContainer>
          <Space direction="vertical">
            <Typography.Text strong>{item.title}</Typography.Text>
            <Typography.Text style={{ fontSize: 16 }}>
              Price: <b>{convertNumberToUSD(item.price)}</b>
            </Typography.Text>
            <Space>
              <Input
                value={quantity}
                onChange={handleChange}
                style={{ width: 48 }}
              />
              <Button
                style={{ background: yellow[4] }}
                onClick={handleUpdate}
                loading={isUpdating}
                disabled={isDeleting}
              >
                Update
              </Button>
            </Space>
          </Space>
        </Space>
        <Button
          onClick={handleDelete}
          loading={isDeleting}
          disabled={isUpdating}
          icon={<DeleteOutlined style={{ color: red[5] }} />}
          type="text"
        />
      </ListItemContainer>
    </List.Item>
  );
};
