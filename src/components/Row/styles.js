import styled from 'styled-components';

export const Container = styled.section`
  display: inline-block;
  flex-direction: column;
  height: 17vh;
  position: relative;
  width: 100%;
  
 >h2{
   font-size: 0.9rem;
   margin:1rem;
 }
 @media screen and (min-width: 1024px){
  height: 20vh;
 }
 >h2{
  font-size: 1.5rem;
 }
`;

export const Catalog = styled.div`
 display: flex;
 flex-wrap: nowrap;
 transition: all 1s ease;
 width: 100%;
 overflow-x: scroll;
 padding-left:5vw ;
 scroll-behavior: smooth;
 scroll-snap-type:mandatory;
 
  &::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  @media screen and (min-width: 1024px){
   width: max-content;

  }

`

export const Swipers = styled.div`

.icon{
  display: none;
}

@media screen and (min-width: 1024px){

position:relative;



.icon{
   display: none;
   font-size: 3vw;
   position: absolute;
   z-index: 99999;
   height: 100%;
   top:0%;
}
  .right{
   right: 0;
   background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 34%);
  }
  .left{
    background: linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 34%);
    left: 0;
  }  
   &:hover{
   .visible{
     display: none;
     opacity: 0%;
    }

   .right, .left{
   display: block;
   }
  }
}





`

