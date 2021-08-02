import React, { ReactNode } from 'react'
import { TextInputProps, TextInput } from 'react-native'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
    
export default function TextArea({...rest}: TextInputProps) {

    return (
        <TextInput 
            style={styles.container} 
            {...rest}
        />
    )
}
