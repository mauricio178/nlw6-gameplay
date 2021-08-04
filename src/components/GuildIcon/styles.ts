import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({    
    image: {
        width: 58,
        height: 65,
        borderRadius: 4,
    },
    container: {
        width: 58,
        height: 65,
        borderRadius: 4,
        backgroundColor: theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'

    }
});