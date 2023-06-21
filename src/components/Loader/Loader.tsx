import { Space, Spin, Typography } from "antd";
import { SpinnerContainer } from "./styles";

export const Loader = () => {
  return (
    <SpinnerContainer>
      <Space align="center" direction="vertical">
        <Spin size="large" />
        <Typography.Text type="secondary">Carregando...</Typography.Text>
      </Space>
    </SpinnerContainer>
  );
};
