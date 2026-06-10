import { ActivityIndicator } from "react-native"

import { styles } from "./styles"
import { colors } from "@/theme/colors"


export default function Loading() {
    return <ActivityIndicator
        color={colors.teal[500]}
        style={styles.container}
    />
}