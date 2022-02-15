import React from "react";

import { IconDown, IconFacebook, IconUp } from '../../assets/icons';

import * as S from './styles';

interface Props {
    userName: string; 
    icon: string; 
    qtdFollowers: string;
    qtdFollowersToday: number; 
    type: string; 
    decreaseViews: boolean;
}

export function CardPrimarySection({
    userName,
    icon,
    qtdFollowers,
    qtdFollowersToday,
    type,
    decreaseViews
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
                {
                    decreaseViews ? 
                    <S.IconUp src={IconDown} />
                    :
                    <S.IconUp src={IconUp} />
                }
                <S.TextToday decreaseViews={decreaseViews}>{qtdFollowersToday} Today</S.TextToday>
            </S.ContainerDay>
        </S.Container>
    )
}