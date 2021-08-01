import React, { ReactNode } from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

interface IPropsInterface {
    urlImage: string
}

export default function Avatar({ urlImage }: IPropsInterface) {

    const {secondary50, secondary70} = theme.colors

    return (
        <LinearGradient 
            style={styles.container} 
            colors={[ secondary50, secondary70]}
        >
            <Image 
                source={{uri: urlImage}} 
                style={styles.avatar}
            />
        </LinearGradient>        
    )
}
