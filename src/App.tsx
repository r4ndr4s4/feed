import { useCallback, useEffect, useRef, useState } from "react";
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
  const [isLoading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const getCard = useCallback(async () => {
    const newPos = cards.length + 1;

    const newCard = {
      id: newPos,
      title: `Card ${newPos}`,
      description: "This is the description",
    };

    await new Promise((resolve) => setTimeout(resolve, 1000)); // TODO remove

    return newCard;
  }, [cards.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isLoading) {
          setLoading(true);

          const scrollOffset = window.scrollY; // TODO resolve jumping

          const newCard = await getCard();
          setCards((prev) => [...prev, newCard]);

          setLoading(false);

          window.scrollTo({ top: scrollOffset, behavior: "instant" });
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [cards.length, getCard, isLoading]);

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          {cards.map(({ id, title, description }) => {
            return <Card key={id} title={title} description={description} />;
          })}

          {isLoading && <LoadingCard />}

          <div ref={observerRef}></div>
        </Col>
      </Row>
    </>
  );
}

export default App;
