import React from "react";

import { IconFacebook, IconUp } from '../../assets/icons';

import * as S from './styles';

interface Props {
    userName: string; 
    icon: string; 
    qtdFollowers: string;
    qtdFollowersToday: number; 
    type: string; 
}

export function CardPrimarySection({
    userName,
    icon,
    qtdFollowers,
    qtdFollowersToday,
    type
}: Props){
    return(
        <S.Container type={type}>
            {
                type === 'instagran' &&
                <S.BorderGradientInstagran />
            }
            <S.ContainerUserName>
                <S.Icon src={icon} />
                <S.UserName>{userName}</S.UserName>
            </S.ContainerUserName>

            <S.ContainerCenter>
                <S.NumberFollowers>{qtdFollowers}</S.NumberFollowers>
                <S.TextFollowers>FOLLOWERS</S.TextFollowers>
            </S.ContainerCenter>

            <S.ContainerDay>
                <S.IconUp src={IconUp} />
                <S.TextToday>{qtdFollowersToday} Today</S.TextToday>
            </S.ContainerDay>
        </S.Container>
    )
}