import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    flex: none;
    overflow: hidden;
    display: inline-block;
  >img{
     margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
    
  }
`;

export const Image = styled.div`
width: 100%;
height: 100%;
background:  url(${(props) => props.imgUrl});
background-repeat: no-repeat;
background-size: cover;

`
