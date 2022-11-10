import React, { useRef, useState, useEffect } from "react";
import { GetMovies } from "../../assets/Apis/Api";
import { Container, Catalog, Swipers, BtnLeft, BtnRight } from "./styles";

import ItemsRow from "../ItemsRow";

function Row({ title, path }) {
  const Swipe= useRef(null);

  const [itemsNumber, setItemsNumber] = useState(0);
  const [indiceBanner, setIndice] = useState(0)
  
  useEffect(()=>{
  setIndice(Math.floor(Math.random() * 15))
 },[])
  const handlleSwipe = (direction) => {
    let slide = (69 * Swipe.current.getBoundingClientRect().width/100 )
    
    if(direction === "left" && itemsNumber > 0) {
      
      Swipe.current.scrollLeft -= slide

      setItemsNumber(itemsNumber - 1);
    }else
    if(direction === "right" && itemsNumber < 6) { 
      
      Swipe.current.scrollLeft += slide
      setItemsNumber(itemsNumber + 1);
    }
    
  };

  return (
    <>
      <Container >
        <h2>{title}</h2>
        <Swipers >
          <BtnRight
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

          <BtnLeft
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

