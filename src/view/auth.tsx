import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../styles/auth.styles";
import Button from "./components/Button";

export default function Auth() {
	return (
		<View style={styles.container}>
			<View />
			<View>
				<Text style={styles.title}>Entrar</Text>
				<TextInput placeholder="E-mail" style={styles.input} />
				<TextInput placeholder="Senha" style={styles.input} />
				<Button 
					title="Entrar" 
					backgroundColor="#04d361" 
					buttonTextColor="#fff"
					mrVertical={16}
					onPress={() => console.log("Entrou")} 
				/>
				<Button 
					title="Registrar"
					backgroundColor="#a4b1b3" 
					buttonTextColor="#fff"
					onPress={() => console.log("Registrou")} 
				/>
			</View>
			<View />
		</View>
	)
}