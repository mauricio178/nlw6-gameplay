import React, { useState } from 'react'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { GuildProps } from '../Appointment'
import { GuildIcon } from '../GuildIcon'
import { theme } from '../../global/styles/theme'

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export default function Guilds({ data, ...rest }: Props) {

    return (
        <TouchableOpacity style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >

            <GuildIcon />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>

            <Feather
                name="chevron-right"
                color={theme.colors.heading}
            />

        </TouchableOpacity>
    )
}
