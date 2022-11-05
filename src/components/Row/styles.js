import styled from 'styled-components';

export const Container = styled.section`
  display: inline-block;
  flex-direction: column;
  height: 20vh;
  position: relative;
  width: 100%;
  
 >h2{
    margin:1rem 1rem;
 }
  
`;

export const Catalog = styled.div`
 display: flex;
 flex-wrap: nowrap;
 transition: all 1s ease;
 width: max-content;
 overflow-x: scroll;

 padding-left:5vw ;
 scroll-behavior: smooth;
 scroll-snap-type:mandatory;

 @media screen and (min-width: 1024px){
    &:hover .swipe{
display:flex;
   } 
}

 &::-webkit-scrollbar{
    width: 0;
    height: 0;
}

`

export const Card = styled.img`
height: 10vw;
margin: 0 0.2em;
float: 2;
@media screen and (min-width: 1024px){
 &:hover{
  transform: scale(1.5);
    
}   
height: 100%;

}

`

export const Swipers = styled.div`
position:relative;

.visible{
  display: none;
}


.icon{
display: none;
  font-size: 2em;
   position: absolute;
   z-index: 99999;
   background-color: rgba(0,0,0,.6);
   height: 100%;
  top:0%;

}
  .right{
right: 0;
  }
  .left{

left: 0;
  }
  
  
  
  &:hover{

.right, .left{
  display: block;
}}





`

