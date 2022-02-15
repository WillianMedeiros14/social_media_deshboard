import styled from "styled-components";
import { breakpoints } from "../../styles/tools/breakpoints";

export const Container = styled.header `
    width: 100%;
    max-width: 1115px; 
    padding-top: 2.563rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
    @media (max-width:${breakpoints.Medium}) {
        width: 100%;
        max-width: 100%; 
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 30px;
        padding-right: 30px;
    }

    @media (max-width: ${breakpoints.Mobile}) {
        flex-direction: column;
        align-items: center;
    }
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
    display: flex;
    margin-top: 12px;

    @media (max-width: 696px) {
        border-top: 1px solid;
        border-color: rgba(99, 104, 126, 0.5);
        margin-top: 23px;
        padding-top: 23px;
    }

    @media (max-width: ${breakpoints.Mobile}) {
       width: 100%;
    }
`;

export const TextThemeMode = styled.p `
    color: ${({theme}) => theme.colors.textSecondary};
    margin-right: 15px;
    margin-top: 2px;
    font-weight: 600;
`;