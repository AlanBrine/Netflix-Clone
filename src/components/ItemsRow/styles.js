import styled from 'styled-components';

export const Container = styled.div`

  margin-left: 1vw;
  cursor: pointer;
  display:flex;
  flex-direction: column;
  
  
  
  &:hover{
    transition-delay: 1s ;
    transition-timing-function: ease-in-out;
    transition-duration: 1.9s;
    transition-property: all;
    z-index: 99; 
    box-shadow: 0px 2px 15px 0px rgba(255,255,255,0.07);
margin-right: 2rem;

    
  >img{ 
    transition-delay: 1s ;
    transition-timing-function: ease-in-out;
    transition-duration: 1.9s;
    transition-property: all;
    width: 25vw;
  }
    
  .info{
    transition-delay: 1s ;
    transition-timing-function: ease-in-out;
    transition-duration: 1.9s;
    transition-property: all;
    
    visibility: visible;
    overflow: auto;
    opacity: 1;
  }
}

  >img{
    width: 22vw;
  }
  
`


export const InfoHover = styled.div`
  
  opacity: 0;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height:20vh;
  background-color: #212121;
  visibility: hidden;
  overflow: hidden;
`  