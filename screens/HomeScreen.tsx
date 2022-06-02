import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen({navigation}:any) {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}> NanoChat. </Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.replace('Login')}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Text style={{ marginVertical: 10 }}>OR</Text>

      <Pressable style={styles.buttonOutlined} onPress={() => navigation.replace('Signup')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </Pressable>
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
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5e3283'
  },

  buttonOutlined: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#5e3283'
  },
  signupText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#5e3283',
  },
  button: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5e3283'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
