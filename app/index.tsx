import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Pressable, Text } from 'react-native';

const LoginPage = () => {
	const router = useRouter();

	const handleLogin = () => {
		router.replace('/');
	};

	return (
		<View className="flex flex-1 items-center justify-center bg-white">

            <Text>Minha Biblioteca</Text>

			<Pressable onPress={handleLogin}>
				<Text>Login</Text>
			</Pressable>

            <StatusBar style='dark'/>
		</View>
	);
};

export default LoginPage;