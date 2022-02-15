import styled, {css} from "styled-components";

interface Props {
    themeDark: boolean;
}

export const Container = styled.button `
    width: 51px;
    height: 24px;
    border-radius: 20px;
    background-image: linear-gradient(to right, #378fe6, #3eda82);
    border: 0;
    cursor: pointer;
    padding-left: 4px;
`;

export const Toogle = styled.div<Props> `
    width: 20px;
    height: 20px;
    background-color: ${({theme}) => theme.colors.toggle};
    border: 0;
    border-radius: 11px;
    transition: all 0.4s;
    ${({themeDark}) => themeDark && css`
        transform: translateX(24px);
    `}

`;
