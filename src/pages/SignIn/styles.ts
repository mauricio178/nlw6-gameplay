import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },

    image: {
        width: '100%',
        height: 360
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 40
    },

    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 8,
    
    },

    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        txteAlign: 'center',
        marginBottom: 64,  
    },

});