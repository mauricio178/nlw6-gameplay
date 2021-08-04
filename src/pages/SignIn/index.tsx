// import { useNavigation } from '@react-navigation/native'
import React from 'react'
import BackgroundDefault from '../../components/BackgroundDefault'
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'

export function SignIn() {

    const { loading, signIn } = useAuth()

    async function handleGoToHome() {
        try {
            await signIn()
        } catch (error) {
            Alert.alert(error)
        }
    }

    return (
        <BackgroundDefault>
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
                    {
                        loading 
                        ? 
                        <ActivityIndicator color={theme.colors.primary}/> 
                        :
                        <ButtonIcon onPress={handleGoToHome} title="Entrar com Discord." activeOpacity={0.7} />
                    }
                </View>
            </View>
        </BackgroundDefault>
    )
}