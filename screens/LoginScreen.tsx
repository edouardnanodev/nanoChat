import { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen({ navigation }: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}> Login. </Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
            />

            <Pressable style={styles.button} onPress={() => navigation.replace('Root')}>
                <Text style={styles.text}>Login</Text>
            </Pressable>

            <Text style={styles.linkText}> Don't have an account?
                <Text style={styles.link} onPress={() => navigation.replace('Signup')}> SignUp</Text></Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: 220
    },

    button: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#5e3283',
        width: 220,
        marginBottom:20
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    linkText: {
        fontSize: 12,
        textAlign: 'right',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5

    },
    link: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#5e3283"
    }
});
