import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
`;


export const ContainerHeader = styled.div `
    width: 100vw;
    height: 15.313rem;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const Main = styled.main `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -4.525rem;
`;

export const Content = styled.div `
    width: 60%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
`;

export const TextToday = styled.h2 `
    color: ${({theme}) => theme.colors.textSecondary};
    margin-top: 48px;
    margin-bottom: 25px;
    width: 100%;
    text-align: left;
`;

export const ContainerOverViewToday = styled.div `
    width: 60%; 
    display: flex;
    flex-direction: column;
    
    align-items: center;
`;

export const ContentOverViewToday = styled(Content) `
   width: 100%;
`;