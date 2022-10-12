import React, { useRef } from "react";
import { GetMovies } from "../../assets/Apis/Api";
import { Container, Catalog, Card, Swipers} from "./styles";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Row({ title, path }) {
  const Swipe = useRef(null)
  
  const handlleRight = (e) => {
    e.preventDefault()
    console.log(Swipe.current.offsetWidth)
    Swipe.current.scrollLeft += Swipe.current.offsetWidth
  }
  const handlleLeft = (e) => {
    e.preventDefault()
    console.log(Swipe.current.offsetWidth)
    Swipe.current.scrollLeft -= Swipe.current.offsetWidth
  }

 
 
  return (
    <>
      <Container>
        <h2>{title}</h2>

        <Catalog ref={Swipe}>
          {GetMovies(path).map((a) => (
            <Card
              key={a.id}
              src={`https://image.tmdb.org/t/p/w500${a.backdrop_path}`}
              alt={a.title}
            />
          ))}

<Swipers className="swipe">

  <FaChevronLeft onClick={handlleLeft}/>

  <FaChevronRight onClick={handlleRight}/>
</Swipers>

        </Catalog>
      </Container>
    </>
  );
}

export default Row;
