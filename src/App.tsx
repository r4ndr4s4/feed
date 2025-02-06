import { Col, Row } from "antd";
import Card from "./Card";

import "./index.css";

function App() {
  return (
    <>
      <Row justify="center">
        <Col span={12}>
          <Card title="Card title" description="This is the description" />
        </Col>
      </Row>
    </>
  );
}

export default App;
