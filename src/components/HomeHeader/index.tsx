import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { colors } from '@/theme/colors'
import { styles } from './style'
import { Separador } from '@/components/Separador'
import { Resumo, ResumoProps } from '@/components/Resumo'

export type HomeHeaderProps = {
    total: string,
    input: ResumoProps,
    output: ResumoProps
}

type Props = {
    data: HomeHeaderProps
}

export function HomeHeader({ data }: Props) {
    return (
        <LinearGradient
            colors={[colors.teal[700], colors.teal[300]]}
            style={styles.container}
        >
            <View>
                <Text style={styles.label}>Total que você possui</Text>
                <Text style={styles.total}>{data.total}</Text>
            </View>

            <Separador color={colors.teal[900]} />
            <View style={styles.resumoContainer}>
                <Resumo
                    data={data.input}
                    icon={{
                        nomeIcone: "arrow-upward",
                        corIcone: colors.green[500]
                    }}
                />

                <Resumo
                    data={data.output}
                    icon={{
                        nomeIcone: "arrow-downward",
                        corIcone: colors.red[500]
                    }}
                    isRight={true}
                />
            </View>
        </LinearGradient>
    )
}