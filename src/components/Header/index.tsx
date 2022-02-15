import React from 'react';
import { ToogleButton } from '..';

import * as S from './styles';

interface Props{
    handlePress: () => void;
    themeDark: boolean;
}

export function Header({handlePress, themeDark}:Props) {
    return(
        <S.Container>
            <S.ContentPrimary>
                <S.TitlePage>Social Media Dashboard</S.TitlePage>
                <S.TotalFollowers>Total Followers: 23,004</S.TotalFollowers>
            </S.ContentPrimary>

            <S.ContentSecondary>
                <S.TextThemeMode>Dark Mode</S.TextThemeMode>
                <ToogleButton handlePress={handlePress} themeDark={themeDark} />
            </S.ContentSecondary>
        </S.Container>
    )
}