import { Col, Row } from "antd";
import Card from "./Card";

import "./index.css";

function App() {
  const cards = [
    { id: 1, title: "Card 1", description: "This is the description" },
    { id: 2, title: "Card 2", description: "This is the description" },
    { id: 3, title: "Card 3", description: "This is the description" },
    { id: 4, title: "Card 4", description: "This is the description" },
    { id: 5, title: "Card 5", description: "This is the description" },
  ];

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          {cards.map(({ id, title, description }) => {
            return <Card key={id} title={title} description={description} />;
          })}
        </Col>
      </Row>
    </>
  );
}

export default App;
