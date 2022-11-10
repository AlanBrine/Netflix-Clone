import React, { useState } from "react";

import { Container, InfoHover } from "./styles";

function ItemsRow({ img, title, name }) {
 
  const choseName = (title,name) =>{
    if(title === undefined){
        return name
    }else{
        return title
    }
}
  
  
    return (
    <>
      <Container 
      
       
      
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={choseName(title, name)}
        />
        <InfoHover className="info"
      
      
        >
<h3>

{choseName(title, name)}
</h3>
       
        </InfoHover>
      </Container>
    </>
  );
}

export default ItemsRow;
