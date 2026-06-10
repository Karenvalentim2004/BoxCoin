import { Stack } from 'expo-router'
import { SQLiteProvider } from 'expo-sqlite'

import { migrate } from '@/database/migrate'
import { colors } from '@/theme/colors'


export default function Layout() {
    return (
        <SQLiteProvider
            databaseName='boxcoin.db'
            onInit={migrate}
        >
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.white }
            }} />
        </SQLiteProvider>
    )
}