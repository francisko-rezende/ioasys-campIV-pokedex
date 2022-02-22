import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body,
p,
h1,
h2,
h3,
ul,
li,
blockquote{
  padding: 0;
  margin: 0;
}


* {
  box-sizing: border-box;
  transition: .2s;
}

/* button {
  background-color: transparent;
  border: none;
} */

body {
  font-family: "Poppins", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

`;
