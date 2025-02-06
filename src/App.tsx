import { useEffect, useRef, useState } from "react";
import { Col, Row } from "antd";
import Card from "./Card";
import LoadingCard from "./LoadingCard";

import "./index.css";

const CARDS = [
  { id: 1, title: "Card 1", description: "This is the description" },
  { id: 2, title: "Card 2", description: "This is the description" },
  { id: 3, title: "Card 3", description: "This is the description" },
  { id: 4, title: "Card 4", description: "This is the description" },
  { id: 5, title: "Card 5", description: "This is the description" },
];

function App() {
  const [cards, setCards] = useState(CARDS);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("DEBUG: IntersectionObserver isIntersecting");

          const newPos = cards.length + 1;

          const newCard = {
            id: newPos,
            title: `Card ${newPos}`,
            description: "This is the description",
          };
          setCards((prev) => [...prev, newCard]);

          console.log("DEBUG: IntersectionObserver adding card");
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [cards.length]);

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          {cards.map(({ id, title, description }) => {
            return <Card key={id} title={title} description={description} />;
          })}

          <LoadingCard />

          <div ref={observerRef}></div>
        </Col>
      </Row>
    </>
  );
}

export default App;
