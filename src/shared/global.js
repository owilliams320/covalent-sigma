import { createGlobalStyle, css } from 'styled-components';

import { color, typography } from './styles';

+ export const fontUrl = 'https://fonts.googleapis.com/css?family=Poppins:400,700,800,900';

export const bodyStyles = css`
  /* Same as before */
  background-color: red;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;