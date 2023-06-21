import { Card as AntdCard, Space, Tooltip, Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import { yellow } from "@ant-design/colors";
import { Card, ImgContainer, ItemInfo } from "./styles";
import { ItemCardProps } from "./types";
import { convertNumberToUSD } from "../../lib/convertNumberToUSD";

const { Text } = Typography;

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <ImgContainer>
          <img alt={item.title} src={item.image} />
        </ImgContainer>
      }
    >
      <AntdCard.Meta
        title={<Tooltip title={item.title}>{item.title}</Tooltip>}
        description={
          <ItemInfo>
            <Space align="center">
              <StarFilled style={{ color: yellow[5] }} />
              <Text style={{ fontSize: 16 }}>{item.rating.rate} ({item.rating.count})</Text>
            </Space>
            <Text style={{ fontSize: 18 }}>{convertNumberToUSD(item.price)}</Text>
          </ItemInfo>
        }
      />
    </Card>
  );
};
