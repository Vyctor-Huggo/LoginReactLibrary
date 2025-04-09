import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useUserContext } from "../contexts/UserContext";

const primaryColor = '#5D3A00';

export default function InfoScreen() {
    const { User } = useUserContext();
    console.log('Usuário: ', User);

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
                <Text style={styles.title}>Informações da Conta</Text>

                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{User?.Email ?? "Nenhum email cadastrado"}</Text>

                <Text style={styles.label}>Usuário</Text>
                <Text style={styles.value}>{User?.Username ?? "Usuário não encontrado"}</Text>

                <Text style={styles.label}>Senha</Text>
                <Text style={styles.value}>******</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EBDD',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: primaryColor,
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: primaryColor,
        fontSize: 16,
        marginTop: 12,
    },
    value: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
});
