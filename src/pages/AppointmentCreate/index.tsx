import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import BackgroundDefault from '../../components/BackgroundDefault'
import Header from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'
import TextArea from '../../components/TextArea'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import ModalView from '../../components/ModalView'
import Guilds from '../Guilds'
import { GuildProps } from '../../components/Appointment'

export default function AppointmentCreate() {

    const [category, setCategory] = useState('')
    const [ openModalGuild, setOpenModalGuild ] = useState(false)
    const [ guild, setGuild ] = useState<GuildProps>({} as GuildProps)

    const navigation = useNavigation()

    function handleOpenGuildModal(){
        setOpenModalGuild(true)
    }
    
    function handleGuildSelect(guildSelect: GuildProps){
        setGuild(guildSelect)
        setOpenModalGuild(false)
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <Header title="Agendar Partida"/>

                <Text style={styles.title}>
                    Selecione uma Categoria
                </Text>

                <CategorySelect
                    hasCheckBox
                    setCategory={setCategory}
                    categorySelected={category}
                />

                <View style={styles.form}>
                    <RectButton onPress={handleOpenGuildModal}>
                        <View style={styles.select}>

                            {
                                guild.icon ? <GuildIcon /> : <View style={styles.image} />
                            }

                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {guild.name ? guild.name : 'Selecione um Servidor' }
                                </Text>
                            </View>

                            <Feather name="chevron-right" color={theme.colors.heading} size={18} />

                        </View>


                    </RectButton>

                    <View style={styles.field}>

                        <View>
                            <Text style={[styles.label, { marginBottom: 8 }]}>
                                Dia / Mês
                            </Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}> / </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.label, { marginBottom: 8 }]}>
                                Hora / Minuto
                            </Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}> : </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.field, { marginBottom: 8 }]}>
                        <Text style={styles.label}>
                            Descrição
                        </Text>
                        <Text style={styles.caracteresLimit}>
                            Max. 100 Caracteres
                        </Text>

                    </View>

                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />

                    <View style={styles.footer}>
                            <Button title="Agendar"/>
                    </View>


                </View>
            </ScrollView>

            <ModalView visible={openModalGuild}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>

        </KeyboardAvoidingView>
    )
}
