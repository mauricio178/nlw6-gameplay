import { theme } from '../../global/styles/theme'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
});