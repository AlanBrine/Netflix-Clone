import React, { useEffect } from "react";
import { useState } from "react";
import { Container ,Image} from "./style";
import { GetMovies } from "../../assets/Apis/Api";

function Banner({path}) {
  const [indiceBanner, setIndice] = useState(0);

  useEffect(() => {
    setIndice(Math.floor(Math.random() * 15));
    
  }, []);

  return (
    <>
      <Container>
      {GetMovies(path).slice(`${indiceBanner}`,`${indiceBanner+5}`).map((a) => (
              <Image
              imgUrl={`https://image.tmdb.org/t/p/w500${a.backdrop_path}`}
              />
        
            ))}
            <img  />
      </Container>
    </>
  );
}

export default Banner;

// .slice(`${indiceBanner}`,`${indiceBanner+5}`)
/*     
    if (mousedOver) {
      const timer = setInterval(() => {
        // cycle prevCount using mod instead of checking for hard-coded length
        setCount((prevCount) => (prevCount + 1) % images.length);
      }, 1000);
      // automatically clear timer the next time this effect is fired or
      // the component is unmounted
      return () => clearInterval(timer);
    } else {
      // otherwise (not moused over), reset the counter
      setCount(0);
    }

  }, [mousedOver]);

  return (
    <div className="App">
      <div className="title">Image Rotate</div>
      <div
        // just set mousedOver here instead of calling update/origCount
        onMouseOver={() => setMousedOver(true)}
        onMouseOut={() => setMousedOver(false)}
      >
        <img src={images[count].source} alt={images.name} />
        <p>count is: {count}</p>
      </div>
    </div>
  );
} */