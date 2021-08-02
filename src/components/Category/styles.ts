import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: 104,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8, 
      marginRight: 8,      
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15,
        marginTop: 15
    },
    check: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 14,
        height: 14,
        backgroundColor: theme.colors.secondary100,
        borderWidth: 2,
        borderColor: theme.colors.secondary30,
        borderRadius: 4,
    },
    
    checked: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.primary,
        borderWidth: 2,
        borderRadius: 4
    }
    
    
});