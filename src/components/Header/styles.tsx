import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const HeaderContainer = styled(Layout.Header)`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 20px;
`;
