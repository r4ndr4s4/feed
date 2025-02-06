import {
  CodeOutlined,
  EllipsisOutlined,
  EyeInvisibleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Card as AntdCard } from "antd";
import { StyledCard } from "./Card";

const { Meta } = AntdCard;

function LoadingCard() {
  return (
    <StyledCard
      cover={
        <img
          alt="placeholder"
          src="https://placehold.co/600x400/D3D3D3/D3D3D3"
        />
      }
      actions={[
        <EyeInvisibleOutlined key="ignore" />,
        <StarOutlined key="save" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      loading
    >
      <Meta avatar={<CodeOutlined />} />
    </StyledCard>
  );
}

export default LoadingCard;
