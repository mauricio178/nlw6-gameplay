import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
           
    },
    banner: {
        width: '100%',
        height: 230,
        marginBottom: 30,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        color: theme.colors.heading
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        lineHeight: 20,
        color: theme.colors.heading
        
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30,

    },
    members: {
        marginLeft: 24,
        marginTop: 24,
        marginBottom: 24,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        marginBottom: getBottomSpace() + 14
    }
});
