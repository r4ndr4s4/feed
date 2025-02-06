import {
  EllipsisOutlined,
  EyeInvisibleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Skeleton } from "antd";
import { StyledCard } from "./Card";
import placeholder from "./assets/emptyPlaceholder.svg";

function LoadingCard() {
  return (
    <StyledCard
      cover={<img alt="placeholder" src={placeholder} />}
      actions={[
        <EyeInvisibleOutlined key="ignore" />,
        <StarOutlined key="save" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton avatar active paragraph={{ rows: 1 }} />
    </StyledCard>
  );
}

export default LoadingCard;
