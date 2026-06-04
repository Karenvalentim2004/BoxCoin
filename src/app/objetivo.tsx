import { View, Text } from 'react-native'
import { PageHeader } from '@/components/PageHeader'

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

export default function Objetivo() {
    return (
        <View style={{ flex: 1, padding: 24, gap: 32 }}>
            <PageHeader
                titulo="Meta"
                subtitulo="Economize para alcançar sua meta financeira."
                rightButton={{
                    icon: "edit",
                    onPress: () => console.log("Editar meta")
                }}
            />

            <View style={{ marginTop: 32, gap: 24 }}>
                <Input label="Nome da meta" placeholder="Ex: Viagem para Paris" />
                <Button
                    titulo="Salvar"
                    onPress={() => console.log("Salvar meta")}
                />
            </View>

        </View>
    )
}