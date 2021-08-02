import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        flex: 1,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    }
});