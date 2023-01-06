import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, handleDelete }) {
	return (
		<TouchableOpacity onPress={() => handleDelete(item.key)}>
			<View style={styles.elementContainer}>
				<MaterialIcons name="delete" size={20} color="white" />
				<Text style={styles.todo}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	todo: {
		color: "white",
		fontSize: "18px",
		marginVertical: 10,
		marginHorizontal: 20,
	},
	elementContainer: {
		flexDirection: "row",
		backgroundColor: "royalblue",
		flexGrow: 1,
		alignItems: "center",
		padding: 15,
		marginVertical: 5,
	},
});
