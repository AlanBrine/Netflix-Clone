import React from "react";
import { categories } from "../../assets/Apis/Api";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import { Container } from "./style";

export default function Home() {
  return (
    <>
      <Container>
        {categories.slice(0, 1).map((a) => (
                <Banner key={1} path={a.path} />
        ))}

        {categories.map((a) => (
          <Row key={a.name} title={a.title} path={a.path} />
        ))}
      </Container>
    </>
  );
}
