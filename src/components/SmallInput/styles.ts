import { theme } from '../../global/styles/theme';
import { StyleSheet } from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary40,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: theme.colors.secondary50
    },
});