import React from "react";

import { IconUp } from '../../assets/icons'

import * as S from './styles';

interface Props {
    title: string; 
    icon: string; 
    qtdFollowers: string; 
    qtdFollowersPercent: string;
}

export function CardOverviewToday({
    title,
    icon,
    qtdFollowers,
    qtdFollowersPercent
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
                    <S.IconUp src={IconUp} />
                    <S.TextFollowersPercent>{qtdFollowersPercent}</S.TextFollowersPercent>
                </S.ContainerViewPercent>
            </S.ContainerSectionSecondary>
        </S.Container>
    );
}