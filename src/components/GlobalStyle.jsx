import { createGlobalStyle } from "styled-components"
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`

  body {
  margin: 0;
  padding: 150px 128px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li, 
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

button {
  cursor: pointer;
}
`