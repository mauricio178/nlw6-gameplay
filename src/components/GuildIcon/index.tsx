import React from 'react'
import { Image, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles';
import DircordSvg from '../../assets/discord.svg'

import { CDN_IMAGE } from '../../configs/index'

type Props = {
    guildId: string
    iconId: string | null
}

export function GuildIcon({ guildId, iconId }: Props) {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}`

    return (
        <View style={styles.container}>
            {
                iconId ?
                    <Image
                        source={{ uri }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    :
                    <DircordSvg width={40} height={40}/>
        }
        </View>
    );
}