import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,   
    },

    header: {
        width: '100%',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 28
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginLeft: 24,
    },

    content: {
        
    },
    matches: {
        marginTop: 24,
        marginLeft: 24,
    }
});