import React, { ReactNode } from 'react'
import { styles } from './styles'
import {View, Modal, ModalProps } from 'react-native'
import { theme } from '../../global/styles/theme'
import BackgroundDefault from '../BackgroundDefault'

type Props = ModalProps & {
    children: ReactNode
}

export default function ModalView({ children, ...rest }: Props) {

    return (
        <Modal transparent
            animationType="slide"
            {...rest}
        >
            
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <BackgroundDefault>
                        <View style={styles.bar}/>
                        {children}
                    </BackgroundDefault>
                </View>

            </View>

        </Modal>
    )
}
