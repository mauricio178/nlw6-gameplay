import React, { useState } from 'react'
import { styles } from './styles'
import { View, FlatList, Text } from 'react-native'
import Guild from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import Header from '../../components/Header'
import { GuildProps } from '../../components/Appointment'


type Props ={
    handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({ handleGuildSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '2',
            name: 'Slayer Darkness',
            icon: null,
            owner: true
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.guilds} 
                data={guilds} 
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <Guild
                    onPress={() => handleGuildSelect(item)}    
                    data={item}
                    />
                )}
                // showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=> <ListDivider/>}
            />
        </View>
    )
}
