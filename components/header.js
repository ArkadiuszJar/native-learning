import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Header() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Todo App</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "royalblue",
	},
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		padding: 20,
		paddingTop: 30,
	},
});
