import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'
//rnstyles

export const styles = StyleSheet.create({
    container: {
        gap: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    label: {
        fontSize: 10,
        color: colors.teal[500]
    },
    value: {
        fontSize: 18,
        color: colors.black
    }
})