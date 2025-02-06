import {
  CodeOutlined,
  EllipsisOutlined,
  EyeInvisibleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { Card as AntdCard } from "antd";
import placeholder from "./assets/placeholder.svg";

const { Meta } = AntdCard;

export const StyledCard = styled(AntdCard)`
  width: 300px;
  margin-bottom: 20px;
`;

function Card({ title, description }: { title: string; description: string }) {
  return (
    <StyledCard
      cover={<img alt="placeholder" src={placeholder} />}
      actions={[
        <EyeInvisibleOutlined key="ignore" />,
        <StarOutlined key="save" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta avatar={<CodeOutlined />} title={title} description={description} />
    </StyledCard>
  );
}

export default Card;
