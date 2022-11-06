import React, { useRef, useState } from "react";
import { GetMovies } from "../../assets/Apis/Api";
import { Container, Catalog, Swipers } from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ItemsRow from "../ItemsRow";

function Row({ title, path }) {
  const Swipe= useRef(null);
  const Withd= useRef(null);
  const [itemsNumber, setItemsNumber] = useState(0);

  const handlleSwipe = (direction) => {
    let slide = (26 * Withd.current.getBoundingClientRect().width/100 * 2.76)
    let distance =  Swipe.current.getBoundingClientRect().x  
    if(direction === "left" && itemsNumber > 0) {
      setItemsNumber(itemsNumber - 1);
      Swipe.current.style.transform = `translateX(${ slide + distance }px)`;
      console.log("foi")
    }else
    if(direction === "right" && itemsNumber < 6) { 
      setItemsNumber(itemsNumber + 1);
      Swipe.current.style.transform = `translateX(${-slide + distance }px)`;
    }
    
  };

  return (
    <>
      <Container ref={Withd}>
        <h2>{title}</h2>
        <Swipers >
          <FaChevronRight
            className={`icon right ${itemsNumber === 6 ?"visible": " "}`}
            onClick={() => {
              handlleSwipe("right");
            }}
          />

          <Catalog ref={Swipe}>
            {GetMovies(path).map((a) => (
              <ItemsRow
                key={a.id}
                img={a.backdrop_path}
                title={a.title}
                name={a.name}
              />
            ))}
          </Catalog>

          <FaChevronLeft
            className={` ${itemsNumber === 0 ?"visible": " "}   icon left `}
            onClick={() => {
              handlleSwipe("left");
            }}
          />
        </Swipers>
      </Container>
    </>
  );
}

export default Row;
