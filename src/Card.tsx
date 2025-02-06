import {
  CodeOutlined,
  EllipsisOutlined,
  EyeInvisibleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { Card as AntdCard } from "antd";

const { Meta } = AntdCard;

const StyledCard = styled(AntdCard)`
  width: 300px;
`;

function Card({ title, description }: { title: string; description: string }) {
  return (
    <StyledCard
      cover={<img alt="placeholder" src="https://placehold.co/600x400" />}
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
