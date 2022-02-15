import styled from "styled-components";
import { breakpoints } from "../../styles/tools/breakpoints";

interface Props {
    decreaseViews: boolean;
}

export const Container = styled.div`
    width: 15.688rem;
    height: 7.75rem;
    background-color: ${({theme}) => theme.colors.cardBackground};
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    &:hover {
        cursor: pointer;
        background-color: rgba(223, 225, 236, 0.1);
    }

    @media (max-width: ${breakpoints.Mobile}) {
        width: 100%;
        align-self: center;
    }
`;


export const ContainerSection= styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
    
export const Icon = styled.img `
    width: 21px;
    height: 21px;
`;

export const Title = styled.p `
    color: ${({theme}) => theme.colors.textPrimary};
`;


export const NumberFollowers = styled.p `
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 30px;
    font-weight: 700;
`;


export const ContainerSectionSecondary= styled(ContainerSection) `
    align-items: flex-end;
`;
   

export const IconUp = styled.img `
    width: 7px;
    height: 5px;
`;


export const ContainerViewPercent= styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;
`;

export const TextFollowersPercent = styled.p<Props> `
    color: ${({theme, decreaseViews}) => decreaseViews ? theme.colors.brightRed : theme.colors.limeGreen};
    font-size: 12px;
    margin-left: 5px;font-size: 12px;
    margin-left: 5px;
`;
    