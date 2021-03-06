import React, { useState } from 'react';
import { IconFacebook, IconTwitter, Iconinstagram, IconYoutube } from '../../assets/icons';
import { Header, CardPrimarySection, CardOverviewToday } from '../../components';

import * as S from './styles'


interface Props{
    handlePress: () => void;
    themeDark: boolean;
}

export function Dashboard({handlePress, themeDark}:Props){
    const [dataPrimaryCard, setDataPrimaryCard] = useState([
        {id: 1, userName: '@nathanf', icon: IconFacebook, qtdFollowers: '1987', qtdFollowersToday: 12, type: 'facebook', decreaseViews: false},
        {id: 2, userName: '@nathanf', icon: IconTwitter, qtdFollowers: '1044', qtdFollowersToday: 99, type: 'twiter', decreaseViews: false},
        {id: 3, userName: '@realnathanf', icon: Iconinstagram, qtdFollowers: '11k', qtdFollowersToday: 1099, type: 'instagran', decreaseViews: false},
        {id: 4, userName: 'Nathan F.', icon: IconYoutube, qtdFollowers: '8239', qtdFollowersToday: 144,  type: 'youTube', decreaseViews: true},
    ]);

    const [dataOverviewToday, setDataOverviewToday] = useState([
        {id: 1, title: 'Page Views', icon: IconFacebook, qtdFollowers: '87', qtdFollowersPercent: '3%', decreaseViews: false},
        {id: 2, title: 'Likes', icon: IconFacebook, qtdFollowers: '52', qtdFollowersPercent: '2%', decreaseViews: true},
        {id: 3, title: 'Likes', icon: Iconinstagram, qtdFollowers: '5462', qtdFollowersPercent: '2257%', decreaseViews: false},
        {id: 4, title: 'Profile Views', icon: Iconinstagram, qtdFollowers: '52k', qtdFollowersPercent: '333%', decreaseViews: false},
        {id: 5, title: 'Retweets', icon: IconTwitter, qtdFollowers: '117', qtdFollowersPercent: '3%', decreaseViews: false},
        {id: 6, title: 'Likes', icon: IconTwitter, qtdFollowers: '507', qtdFollowersPercent: '553%', decreaseViews: false},
        {id: 7, title: 'Likes', icon: IconYoutube, qtdFollowers: '107', qtdFollowersPercent: '19%', decreaseViews: true},
        {id: 8, title: 'Page Views', icon: IconYoutube, qtdFollowers: '1407', qtdFollowersPercent: '12%', decreaseViews: true},
    ]);


    return (
        <S.Container>
            <S.ContainerHeader>
                <Header handlePress={handlePress} themeDark={themeDark}/>
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
                                decreaseViews={item.decreaseViews}
                            />
                           )
                        })
                    }                  
                </S.Content>

                <S.ContainerOverViewToday>
                    <S.TextToday>Overviw - Today</S.TextToday>
                    <S.ContentOverViewToday>
                        {
                            dataOverviewToday.map(item => {
                            return(
                                    <CardOverviewToday 
                                        key={item.id}
                                        title={item.title}
                                        icon={item.icon}
                                        qtdFollowers={item.qtdFollowers}
                                        qtdFollowersPercent={item.qtdFollowersPercent}
                                        decreaseViews={item.decreaseViews}
                                    />
                            )
                            })
                        }  
                    </S.ContentOverViewToday>                
                </S.ContainerOverViewToday>
            </S.Main>
        </S.Container>
    )
}