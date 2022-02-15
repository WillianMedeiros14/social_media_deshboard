import styled, {css} from "styled-components";

interface Props {
    type: string;
}

export const Container = styled.div<Props>`
    width: 15.688rem;
    height: 13.438rem;
    background-color: ${({theme}) => theme.colors.cardBackground};
    border-radius: 5px;
    border-top: 4px solid;

    ${({type}) => type === 'facebook' && css `
        border-color: ${({theme}) => theme.colors.facebook};
    `};

    ${({type}) => type === 'twiter' && css `
        border-color: ${({theme}) => theme.colors.twitter};
    `};

    ${({type, theme}) => type === 'instagran' && css `
         border-top: 0px;
    `};

    ${({type}) => type === 'youTube' && css `
        border-color: ${({theme}) => theme.colors.youTube};
    `};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 28px;

    &:hover {
        cursor: pointer;
        background-color: rgba(223, 225, 236, 0.1);
    }
    position: relative;
`;

export const BorderGradientInstagran = styled.div`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 4px;
    background-image: linear-gradient(to right, #fdc468, #df4996);
    position: absolute;
    top: 0;
`

export const ContainerUserName = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Icon = styled.img `
   width: 21px;
   height: 21px;
`;

export const UserName = styled.p `
   color: ${({theme}) => theme.colors.textPrimary};
   margin-left: 5px;
`;


export const ContainerCenter= styled.div `
    
`;


export const NumberFollowers = styled.p `
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 50px;
    text-align: center;
    font-weight: 700;
`;

export const TextFollowers = styled.p `
    color: ${({theme}) => theme.colors.textPrimary};
    text-align: center;
`;

export const ContainerDay= styled(ContainerUserName) `
    align-items: center;
`;

export const IconUp = styled.img `
    width: 7px;
    height: 5px;
`;

export const TextToday = styled.p `
    color: ${({theme}) => theme.colors.limeGreen};
    font-size: 12px;
    margin-left: 5px;
`;

