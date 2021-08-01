import React from 'react'
import { Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles';

export function GuildIcon() {

    const uri = 'https://i.pinimg.com/474x/27/e5/e0/27e5e0e7972d40c56a14813deef9c1dd.jpg'

    return (
            <Image 
            source={ { uri } }
            style={styles.image}
            resizeMode="cover"
            />
    );
}