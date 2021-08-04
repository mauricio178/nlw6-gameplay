// # NATIVE, STYLE
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'

// # COMPONENTS
import BackgroundDefault from '../../components/BackgroundDefault'
import Header from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'
import TextArea from '../../components/TextArea'
import { Button } from '../../components/Button'
import ModalView from '../../components/ModalView'
import Guilds from '../Guilds'
import { GuildProps } from '../../components/Appointment'
import { COLLECTION_APPOINTMENTS } from '../../configs/database' 

export default function AppointmentCreate() {

    const [category, setCategory] = useState('')
    const [openModalGuild, setOpenModalGuild] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [description, setDescription] = useState('')
    
    const navigation = useNavigation()

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
    }

    function handleOpenGuildModal() {
        setOpenModalGuild(true)
    }

    function handleCloseGuildModal() {
        setOpenModalGuild(false)
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        setOpenModalGuild(false)
    }

    async function handleSave(){
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}`,
            description
        }

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : []

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
        );

        navigation.navigate('Home')
    }

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <BackgroundDefault>
                <ScrollView>
                    <Header title="Agendar Partida" />

                    <Text style={styles.title}>
                        Selecione uma Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuildModal}>
                            <View style={styles.select}>

                                {
                                    // guild.icon 
                                    // ?
                                    <GuildIcon guildId={guild.id} iconId={guild.icon}/> 
                                    // : 
                                    // <View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um Servidor'}
                                    </Text>
                                </View>

                                <Feather name="chevron-right" color={theme.colors.heading} size={18} />

                            </View>


                        </RectButton>

                        <View style={styles.field}>

                            <View>
                                <Text style={[styles.label, { marginBottom: 8, marginLeft: 12 }]}>
                                    Dia      /    Mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput 
                                        onChangeText={setDay}
                                        maxLength={2} />
                                    <Text style={styles.divider}> / </Text>
                                    <SmallInput 
                                        onChangeText={setMonth}
                                        maxLength={2} />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, { marginBottom: 8, marginLeft: 6 }]}>
                                    Hora    :   Minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput 
                                        onChangeText={setHour} 
                                        maxLength={2} />
                                    <Text style={styles.divider}> : </Text>
                                    <SmallInput 
                                        onChangeText={setMinute} 
                                        maxLength={2} />
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
                            onChangeText={setDescription}
                        />

                        <View style={styles.footer}>
                            <Button title="Agendar" onPress={handleSave}/>
                        </View>


                    </View>
                </ScrollView>
            </BackgroundDefault>

            <ModalView visible={openModalGuild} closeModal={handleCloseGuildModal}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>

        </KeyboardAvoidingView>
    )
}
