import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Fuckk the Police</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#759FBC",
		alignItems: "center",
	},
	text: {
		color: "white",
		fontSize: 30,
		padding: 20,
	},
});
