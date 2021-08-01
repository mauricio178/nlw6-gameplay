import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SignIn() {

    const navigation = useNavigation()

    function handleGoToHome(){
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Image 
                source={IlustrationImg} 
                style={styles.image}
                resizeMode="stretch"
            />
            
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize{'\n'}
                    suas Jogatinas {'\n'}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon onPress={handleGoToHome} title="Entrar com Discord." activeOpacity={0.7}/>
            </View>
        </View>
    )
}