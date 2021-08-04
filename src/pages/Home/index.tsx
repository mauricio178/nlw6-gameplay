// # NATIVE, STYLE
import React, { useState, useCallback } from 'react'
import { View, FlatList, Text } from 'react-native'
import { styles } from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// # COMPONENTS
import { CategorySelect } from '../../components/CategorySelect'
import Profile from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import BackgroundDefault from '../../components/BackgroundDefault'
import { Load } from '../../components/Load'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'

export default function Home() {

    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState<AppointmentProps[]>([])

    const navigation = useNavigation()



    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected })
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const storage: AppointmentProps[] = response ? JSON.parse(response) : []

        if (category) {
            setAppointments(storage.filter(item => item.category === category))
        } else {
            setAppointments(storage)
        }

        setLoading(false)
    }

    useFocusEffect(useCallback(() => {
        loadAppointments()
    }, [category]))

    return (
        <BackgroundDefault>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <Text style={styles.title}>
                Categorias
            </Text>


            <CategorySelect categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading ? <Load />
                    :
                    <>
                        <ListHeader
                            title="Partidas Agendadas"
                            subtitle={`Total ${appointments.length}`}/>

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment 
                                    data={item} 
                                    onPress={() => handleAppointmentDetails(item)} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }
        </BackgroundDefault>
    )
}
