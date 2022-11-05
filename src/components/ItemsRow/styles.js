import styled from 'styled-components';

export const Container = styled.div`
 // position: relative;
  margin-left: 1vw;
  cursor: pointer;
  display:flex;
  flex-direction: column;

 /*  &:hover{
 
   
  width:36vw ;
  
    z-index: 99;
    
    >img{
        
 transition-delay:transition 9000s;
transition:width 2s;

        width: 28vw;

    }
    
    .info{
        transition:opacity  20s linear;
       // 
        display: flex;
       opacity: 100%;
  }
 } */
 
.info{
    transition:opacity 2s;
   
opacity: 0%;
}
>img{
   
    width: 25vw;
}
`;


export const InfoHover = styled.div`

padding: 12px;
display: none;
align-items: flex-start;
width: 100%;
height:25vh;

background-color: #212121;




` 