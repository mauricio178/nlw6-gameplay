import React from 'react'
import { View, Text, TextInput, Image, StatusBar} from 'react-native'
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SignIn() {

    return (
        <View style={styles.container}>

            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Image 
                source={IlustrationImg} 
                style={styles.image}
                resizeMode="stretch"
            />
            
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    Facilmente {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title="Entrar com Discord" activeOpacity={0.7}/>
            </View>
        </View>
    )
}