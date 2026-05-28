import { Text, View } from "react-native";
import {useLocalSearchParams} from 'expo-router'

export default function EmProgresso() {
    const params = useLocalSearchParams()

    return (
        <View > 
            <Text>
                id: {params.id}
            </Text>
        </View>
    )
}