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
`;

export const Main = styled.main `
    display: flex;
    justify-content: center;
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