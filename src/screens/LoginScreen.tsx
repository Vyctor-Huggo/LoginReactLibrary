// LoginScreen.tsx
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useUserContext } from '../contexts/UserContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces';

type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({ navigation }: Props) {
    const { loginUser, User } = useUserContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSecure, setIsSecure] = useState(true);

    const handleLoginUser = async () => {
        try {
            await loginUser({ email, password });
            navigation.navigate("InfoScreen");
        } catch (error) {
            alert("Falha no login. Verifique suas credenciais.");
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/biblioteca.jpeg')} style={styles.image} resizeMode="cover" />
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="exemplo@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <Text style={styles.label}>Senha</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputPassword}
                                value={password}
                                onChangeText={setPassword}
                                placeholder="********"
                                secureTextEntry={isSecure}
                            />
                            <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                                <Text style={styles.eye}>{isSecure ? "👁️" : "🙈"}</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleLoginUser}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                            <Text style={styles.secondaryText}>Não tem conta? Registrar-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
  
        
    );
}

const primaryColor = '#5D3A00';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EBDD',
    },
    imageContainer: {
        width: windowWidth,
        height: windowHeight * 0.3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    form: {
        flex: 1,
        padding: 20,
        gap: 10,
    },
    label: {
        fontWeight: 'bold',
        color: primaryColor,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: primaryColor,
        borderRadius: 12,
        padding: 10,
        backgroundColor: '#FFF8F0',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: primaryColor,
        borderRadius: 12,
        paddingHorizontal: 10,
        backgroundColor: '#FFF8F0',
    },
    inputPassword: {
        flex: 1,
        paddingVertical: 10,
    },
    eye: {
        fontSize: 18,
    },
    button: {
        borderWidth: 2,
        borderColor: primaryColor,
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 16,
    },
    secondaryText: {
        color: '#A47551',
        textAlign: 'center',
        marginTop: 15,
    },
    scrollContent: {
        flexGrow: 1,
    },
});
