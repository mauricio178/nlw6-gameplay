import React from 'react'
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    title: string,
    subtitle: string
}

export function ListHeader({ title, subtitle }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                {title}
            </Text>

            <Text style={styles.subtitle} >
                {subtitle}
            </Text>

        </View>
    );
}