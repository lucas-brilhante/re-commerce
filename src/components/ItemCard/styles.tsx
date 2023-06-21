import { Card as AntdCard } from "antd";
import styled from "styled-components";

export const Card = styled(AntdCard)`
  overflow: hidden;
  width: 240px;
`;

export const ImgContainer = styled.div`
  padding: 8px;
  width: 100%;
  height: 240px;

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
