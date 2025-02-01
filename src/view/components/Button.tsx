import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor: string;
  buttonTextColor: string;
  mrVertical?: number;
  mrTop?: number;
  mrBottom?: number;
}

export default function Button(props: ButtonProps){
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { 
          backgroundColor: props.backgroundColor,
          marginVertical: props.mrVertical || 0,
        }
      ]} {...props}>
      <Text 
        style={[styles.buttonText, { color: props.buttonTextColor}]}
      >{props.title}</Text>
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