import React, { useState } from 'react';
import { IconFacebook, IconTwitter, Iconinstagram, IconYoutube } from '../../assets/icons';
import { Header, CardPrimarySection } from '../../components';

import * as S from './styles'

export function Dashboard(){
    const [dataPrimaryCard, setDataPrimaryCard] = useState([
        {id: 1, userName: '@nathanf', icon: IconFacebook, qtdFollowers: 1987, qtdFollowersToday: 12, type: 'facebook'},
        {id: 2, userName: '@nathanf', icon: IconTwitter, qtdFollowers: 1044, qtdFollowersToday: 99, type: 'twiter'},
        {id: 3, userName: '@realnathanf', icon: Iconinstagram, qtdFollowers: 1987, qtdFollowersToday: 1099, type: 'instagran'},
        {id: 4, userName: 'Nathan F.', icon: IconYoutube, qtdFollowers: 8239, qtdFollowersToday: 144,  type: 'youTube'},
    ]);

    return (
        <S.Container>
            <S.ContainerHeader>
                <Header />
            </S.ContainerHeader>

            <S.Main>
                <S.Content>
                    {
                        dataPrimaryCard.map(item => {
                           return(
                            <CardPrimarySection 
                                key={item.id}
                                userName={item.userName}
                                icon={item.icon}
                                qtdFollowers={item.qtdFollowers}
                                qtdFollowersToday={item.qtdFollowersToday}
                                type={item.type}
                            />
                           )
                        })
                    }
                </S.Content>
            </S.Main>
        </S.Container>
    )
}