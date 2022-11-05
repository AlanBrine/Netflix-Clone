import { createGlobalStyle } from "styled-components";
import { colors } from "./colors"

export const Globalstyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Gotham Book", sans-serif;
 
}

html, body{
  height:100vh;
  width:100%;
}

&::-webkit-scrollbar {
  width: 0.9vw;
  background:transparent;
   -webkit-appearance: none;
   background-color: transparent;
}


&::-webkit-scrollbar-track{
    background-color: ${colors.black};
}
 
&::-webkit-scrollbar-thumb{
    border-radius: 12px;
    background-clip: content-box;
    background-color: #a0a0a0;
}
`