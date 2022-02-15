import styled from "styled-components";
import { breakpoints } from "../../styles/tools/breakpoints";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
`;


export const ContainerHeader = styled.div `
    width: 100%;
    height: 15.313rem;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-left: 25px;
    padding-right: 25px;
   

    @media (max-width:${breakpoints.Medium}) {
        height: 18.313rem;
    }

    @media (max-width: 437px) {
        height: 21.313rem;
        padding-left: 0px;
        padding-right: 0px;
    }

    @media (max-width: 259px) {
        height: 24.313rem;
    }

`;

export const Main = styled.main `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -4.525rem;
    padding-left: 30px;
    padding-right: 30px;

    padding-bottom: 40px;

    @media (max-width:${breakpoints.Medium}) {
        margin-top: -4.525rem;
    }
`;

export const Content = styled.div `
    width: 100%;
    max-width: 1115px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width:${breakpoints.Medium}) {
       align-items: center;
       justify-content: center;
    }
`;

export const TextToday = styled.h2 `
    color: ${({theme}) => theme.colors.textSecondary};
    margin-top: 48px;
    margin-bottom: 25px;
    width: 100%;
    text-align: left;
`;

export const ContainerOverViewToday = styled.div `
    width: 100%;
    max-width: 1115px; 
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const ContentOverViewToday = styled(Content) `
    max-width: 1115px; 
`;