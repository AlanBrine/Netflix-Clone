import styled from 'styled-components';

export const Container = styled.section`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 20vh;
 >h2{
    margin:1rem 1rem;
 }
  


`;





export const Catalog = styled.div`
display: flex;

 
  overflow-x: scroll;
 margin-left:5vw ;
 scroll-behavior: smooth;
 scroll-snap-type:mandatory;


  &::-webkit-scrollbar{
    width: 0;
    height: 0;
    
}
&:hover .swipe{
display:flex;

}
`

export const Card = styled.img`


height: 10vh;
margin: 0 0.2em;


@media screen and (min-width: 1024px){
 &:hover{
    
    transform: scale(1.5);
    z-index: 99;
}   
height: 30vh;

}
@media screen and (min-width: 1440px){
height: 40vh;
}

`




export const Swipers = styled.div`
display: none;
width: 90%;
top:100%;
justify-content: space-between;
position: absolute;

`