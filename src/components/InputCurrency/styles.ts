import { StyleSheet } from 'react-native';

import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 10
    },
    label: {
        fontSize: 12,
        color: colors.gray[500]
    },
    input: {
        color: colors.black,
        fontSize: 16,
        padding: 12,
        borderRadius: 6,
        backgroundColor: colors.gray[400],
        borderBottomWidth: 1,
    }
})