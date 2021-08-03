import React, { ReactNode } from 'react'
import { styles } from './styles'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import { theme } from '../../global/styles/theme'
import BackgroundDefault from '../BackgroundDefault'

type Props = ModalProps & {
    children: ReactNode
    closeModal: () => void;
}

export default function ModalView({ children, closeModal, ...rest }: Props) {

    return (
        <Modal transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>

                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <BackgroundDefault>
                            <View style={styles.bar} />
                            {children}
                        </BackgroundDefault>
                    </View>

                </View>
            </TouchableWithoutFeedback>

        </Modal>
    )
}
