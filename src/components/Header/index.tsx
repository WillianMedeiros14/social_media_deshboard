import React from 'react';

import * as S from './styles';

export function Header() {
    return(
        <S.Container>
            <S.ContentPrimary>
                <S.TitlePage>Social Media Dashboard</S.TitlePage>
                <S.TotalFollowers>Total Followers: 23,004</S.TotalFollowers>
            </S.ContentPrimary>

            <S.ContentSecondary>
                <S.TextThemeMode>Dark Mode</S.TextThemeMode>
            </S.ContentSecondary>
        </S.Container>
    )
}