import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor: string;
  buttonTextColor: string;
}

export default function Button(props: ButtonProps){
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { backgroundColor: props.backgroundColor }
      ]} {...props}>
      <Text 
        style={[styles.buttonText, { color: props.buttonTextColor}]}
      >Entrar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
})