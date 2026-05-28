import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors'


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 324,
        paddingHorizontal: 24,
        paddingBottom: 18,
        gap: 24,
        justifyContent: 'flex-end'
    },
    label: {
        fontSize: 13,
        color: colors.black,
    },
    total: {
        fontSize: 32,
        color: colors.black
    },
    resumoContainer: {}
})