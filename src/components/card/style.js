import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`    
    max-width: 900px; 
    margin: 0 auto;
    align-self: center;
    padding: 30px;
    display: grid;
    text-align:center;
    gap: 40px;
    justify-content: center;
    margin-bottom: 100px;
    
    .card {
        display: grid;
        grid-template-areas: 
        "img titulo titulo"
        "img content content";
        max-width:900px;
        max-height: 350px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 40px;
        gap: 15px;

        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        } 

    }

    .titulo {
        color: #888888;
        font-size: 1.700em;
        grid-area: titulo;
        transition: 0.1s;
        margin-bottom:5px;

        &:hover { 
         color: #585858;
    
        }
        
    }

    .img {
        display:grid !important;
        align-items:center;
        grid-area: img;
        vertical-align: middle;
        max-height: 250px;
        border: 1.5px solid  #E0E0E0;

        img {
            max-width:100%;
            max-height: 100%;
        }
    }

    .content {
        grid-area:content;
        color: #888888;
        font-size: 1em;
    }

    @media (max-width: 600px) {
    .card {
        display: grid;
        grid-template-areas: 
        "titulo titulo titulo"
        "img img img"
        "content content content";
        max-height: 700px;
    }
}


    
    

`;