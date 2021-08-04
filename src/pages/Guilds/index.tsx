import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import { View, FlatList, Text } from 'react-native'
import Guild from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'
import { GuildProps } from '../../components/Appointment'
import { api } from '../../services/api'


type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({ handleGuildSelect }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true)

    async function fetchGuilds(){
        const response = await api.get('/users/@me/guilds')

        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchGuilds()
    }, [])

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                    <FlatList
                        style={styles.guilds}
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                onPress={() => handleGuildSelect(item)}
                                data={item}
                            />
                        )}
                        // showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDivider isCenter />}
                        ListHeaderComponent={() => <ListDivider isCenter />}
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
                    />
            }
        </View>
    )
}
