import { Button, Text, View } from "react-native";
import { styles } from "../styles/home.styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Nova transação" />
    </View> 
  );
}