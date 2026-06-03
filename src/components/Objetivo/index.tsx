import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'


export function Objetivo() {
    return (
        <TouchableOpacity style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.nome}>
                    Comprar muito paes de queijo
                </Text>
                <Text style={styles.status}>
                    25% - R$250,00 de R$1.000,00
                </Text>
            </View>

            <MaterialIcons name='chevron-right' size={20} />

        </TouchableOpacity>
    )
}