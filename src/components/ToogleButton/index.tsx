import React from "react";

import * as S from './styles';

interface Props{
    handlePress: () => void;
    themeDark: boolean;
}

export function ToogleButton({handlePress, themeDark}:Props){
    return(
        <S.Container onClick={handlePress}>
            <S.Toogle themeDark={themeDark}/>
        </S.Container>
    );
}