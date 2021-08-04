import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { styles } from './styles'
import BackgroundDefault from '../../components/BackgroundDefault'
import Header from '../../components/Header'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import Member from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'


export default function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Fernando Abreu',
            avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOI0rIckuzm1t61FWMn-oxQeB3oHe8wKYMg&usqp=CAU',
            status: 'online'
        },
        {
            id: '2',
            username: 'Carlos Oliveira',
            avatar_url: 'https://i2.wp.com/i.pinimg.com/736x/61/61/45/616145a5703d493cafebe1aa0783c3ea.jpg',
            status: 'online'
        },
        {
            id: '3',
            username: 'Julia Martins',
            avatar_url: 'https://i0.wp.com/i.pinimg.com/736x/08/09/18/080918c5636e2715b74e04e4a8e8f9ab.jpg',
            status: 'offline'
        },
        {
            id: '4',
            username: 'Gustavo Hugo',
            avatar_url: 'https://pbs.twimg.com/profile_images/1151958380023570444/1LttfZMS.jpg',
            status: 'offline'
        },
        {
            id: '5',
            username: 'Gabriel Nunes',
            avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv59F7bnL6CFrD1shcLN2yY9lowgmc2ZNFuA&usqp=CAU',
            status: 'offline'
        },
        {
            id: '6',
            username: 'Vanessa Faria',
            avatar_url: 'https://i2.wp.com/i.pinimg.com/originals/3a/9d/ca/3a9dca702a1e0fb0bf83ae8cbdedf87d.jpg',
            status: 'offline'
        },
        {
            id: '7',
            username: 'Jorge Carvalho',
            avatar_url: 'https://avatarfiles.alphacoders.com/716/71684.jpg',
            status: 'offline'
        }
    ]

    return (
        <BackgroundDefault>
            <Header title="Detalhes" action={
                <BorderlessButton>
                    <Fontisto name="share" color={theme.colors.primary} size={20} />
                </BorderlessButton>
            } />

            <ImageBackground style={styles.banner} source={BannerImg}>
                <View style={styles.bannerContent}>

                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que chegaremos ao Challenger sem perder uma partida no md10!
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader title="Jogadores" subtitle="Total 3" />

            <FlatList
                style={styles.members}
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCenter/>
            }
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </BackgroundDefault>
    )
}
