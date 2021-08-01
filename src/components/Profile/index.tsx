import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import Avatar from '../Avatar'
import { styles } from './styles'

export default function Profile() {

    return (
        <View style={styles.container}>
            <Avatar urlImage="https://depor.com/resizer/X-xln6YiQqyEk2ddaDqZuQw9Ynw=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Q7AHXEQYA5C7NMIDBAIN4H57O4.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Mauricio
                    </Text>
                </View>

                <Text style={styles.message}> 
                    Hoje é dia de vitória!
                </Text>
            </View>
        </View>   
    )
}
