import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: 360
    },

    content: {
        marginTop: -40,
        paddingHorizontal: 30
    },

    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 4,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
        
        
    },
    
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 32, 
        fontFamily: theme.fonts.text500, 
        lineHeight: 25
    },

});