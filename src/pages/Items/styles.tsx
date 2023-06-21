import { Button, Row } from "antd";
import styled from "styled-components";

export const ItemsContainer = styled(Row)`
  justify-content: center;
`;

export const ImgContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 500px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const OrderButton = styled(Button)`
  width: calc(100% - 32px);
`;
