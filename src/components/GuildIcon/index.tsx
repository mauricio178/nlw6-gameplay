import React from 'react'
import { Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles';

export function GuildIcon() {

    const uri = 'https://i.pinimg.com/originals/36/19/33/361933dee84d6fdd7d165a0f91ec2459.jpg'

    return (
            <Image 
            source={ { uri } }
            style={styles.image}
            resizeMode="cover"
            />
    );
}