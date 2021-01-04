import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
body,
p,
h1,
ul,
li,
blockquote {
  padding: 0px;
  margin: 0px;
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}


body {
  font-family: Roboto,  sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #FFFFFF;
 }
 
li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  border-radius: 5px;
}

button {
  cursor:pointer;
}


.avatar {
  max-width: 200px;
}


`;