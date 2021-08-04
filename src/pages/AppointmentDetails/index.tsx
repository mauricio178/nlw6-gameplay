// # REACT, REACT NATIVE, STYLES
import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View, FlatList, Alert, Share, Platform } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { api } from '../../services/api'

// # COMPONENTS
import BannerImg from '../../assets/banner.png'
import BackgroundDefault from '../../components/BackgroundDefault'
import Header from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import Member, { MemberProps } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { AppointmentProps } from '../../components/Appointment'
import { Load } from '../../components/Load'


type Params = {
    guildSelected: AppointmentProps
}

type GuildWidget = {
    id: string
    name: string
    instant_invite: string
    members: MemberProps[]
}

export default function AppointmentDetails() {

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading] = useState(true)
    const [members, setMembers] = useState<MemberProps>()

    const routes = useRoute()
    const { guildSelected } = routes.params as Params

    async function fetchGuildInfo() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
            setWidget(response.data)

        } catch {
            Alert.alert('Você precisa ser Dono de um servidor e ativar o "Widget')
        } finally {
            setLoading(false)
        }
    }
    
    function handleShareInvite(){
        const message = Platform.OS === 'ios' ? 
        `Junte-se a ${guildSelected.guild.name}` 
        : widget.instant_invite

        Share.share({
            message,
            url: widget.instant_invite
        })
    }

    useEffect(() => {
        fetchGuildInfo()
    }, [])

    return (
        <BackgroundDefault>
            <Header title="Detalhes" action={
                guildSelected.guild.owner &&
                <BorderlessButton onPress={handleShareInvite}>
                    <Fontisto name="share" color={theme.colors.primary} size={20} />
                </BorderlessButton>
            } />

            <ImageBackground style={styles.banner} source={BannerImg}>
                <View style={styles.bannerContent}>

                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>

            { loading ? <Load/> :
                <>
                    <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />

                    <FlatList
                        style={styles.members}
                        data={widget.members}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCenter />
                        }
                    />
                </>
            }
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </BackgroundDefault>
    )
}
