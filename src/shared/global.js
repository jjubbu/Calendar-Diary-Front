import {createGlobalStyle} from "styled-components";
import {normalize} from 'react-style-reset/string';

export const GlobalStyle = createGlobalStyle `

${normalize};

*{padding:0; margin:0;}

html{
    width: 100%;
    height: 100%;
    color:#818D90;
    font-size: 12px;

    body{
        width: 100%;
        height: 100%;
        background: #EAE6E2;
    }

    @media only screen and (max-width:680px){
        font-size: 9px;
    }
}

#root{
    width: 100%;
    height: 100%;
    position: relative;
}
`
