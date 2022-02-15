import styled from "styled-components";

export const Container = styled.header `
    width: 60%;
    padding-top: 2.563rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentPrimary = styled.div `
   
`;

export const TitlePage = styled.h1 `
    color: ${({theme}) => theme.colors.textSecondary};
    margin-bottom: 11px;
`;

export const TotalFollowers = styled.h3 `
    color: ${({theme}) => theme.colors.textPrimary};
`;


export const ContentSecondary = styled.div `
   
`;

export const TextThemeMode = styled.p `
    color: ${({theme}) => theme.colors.textSecondary};
`;