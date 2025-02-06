import {
  CodeOutlined,
  EllipsisOutlined,
  EyeInvisibleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Card as AntdCard } from "antd";
import { StyledCard } from "./Card";
import placeholder from "./assets/emptyPlaceholder.svg";

const { Meta } = AntdCard;

function LoadingCard() {
  return (
    <StyledCard
      cover={<img alt="placeholder" src={placeholder} />}
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
