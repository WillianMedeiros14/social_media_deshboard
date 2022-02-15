import React from "react";

import { IconDown, IconUp } from '../../assets/icons'

import * as S from './styles';

interface Props {
    title: string; 
    icon: string; 
    qtdFollowers: string; 
    qtdFollowersPercent: string;
    decreaseViews: boolean;
}

export function CardOverviewToday({
    title,
    icon,
    qtdFollowers,
    qtdFollowersPercent,
    decreaseViews
}: Props){
    return (
        <S.Container>
            <S.ContainerSection>
                <S.Title>{title}</S.Title>
                <S.Icon src={icon} />
            </S.ContainerSection>

            <S.ContainerSectionSecondary>
                <S.NumberFollowers>{qtdFollowers}</S.NumberFollowers>
                <S.ContainerViewPercent>
                    {
                        decreaseViews ? 
                        <S.IconUp src={IconDown} />
                        :
                        <S.IconUp src={IconUp} />
                    }
                    <S.TextFollowersPercent decreaseViews={decreaseViews}>{qtdFollowersPercent}</S.TextFollowersPercent>
                </S.ContainerViewPercent>
            </S.ContainerSectionSecondary>
        </S.Container>
    );
}