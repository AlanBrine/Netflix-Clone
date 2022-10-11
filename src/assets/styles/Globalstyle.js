import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const Globalstyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Gotham Book", sans-serif;
  color: ${colors.red};
}



`