import React, { useState } from 'react'
import { styles } from './styles'
import { View, FlatList, Text } from 'react-native'
import { CategorySelect } from '../../components/CategorySelect'
import Profile from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { useNavigation } from '@react-navigation/native'
import BackgroundDefault from '../../components/BackgroundDefault'

export default function Home() {

    const [category, setCategory] = useState('')

    const navigation = useNavigation()

    const appointment = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:48',
            description: 'É hoje que chegaremos ao nível mestre clã!'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: "S_D_K ( ¬_¬)",
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:48',
            description: 'Jogatina de 10 Horas para alcançar mestre!'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'SID TOOTH [ ¨_¨]',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:48',
            description: 'É hoje que chegaremos ao nível mestre clã!'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:48',
            description: 'É hoje que chegaremos ao nível mestre clã!'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:48',
            description: 'É hoje que chegaremos ao nível mestre clã!'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:48',
            description: 'É hoje que chegaremos ao nível mestre clã!'
        },
        {
            id: '7',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:48',
            description: 'É hoje que chegaremos ao nível mestre clã!'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

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
                

            <ListHeader
                title="Partidas Agendadas"
                subtitle="Total 6" />

            <FlatList
                data={appointment}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment data={item} onPress={handleAppointmentDetails} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />
        </BackgroundDefault>
    )
}


// Stop in > 57:30 > Aula 4