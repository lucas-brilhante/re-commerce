import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ImgContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-right: 32px;
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`;
