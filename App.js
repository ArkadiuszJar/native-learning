import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import Header from "./components/header";

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "Buy coffee", key: "1" },
		{ text: "Create an app", key: "2" },
		{ text: "Play on the switch", key: "3" },
	]);

	const handleDelete = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				{/* to form */}
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => (
							<View style={styles.elementContainer}>
								<Text style={styles.todo}>{item.text}</Text>
								<TouchableOpacity
									style={styles.delete}
									onPress={() => handleDelete(item.key)}
								>
									<Text style={styles.deleteText}>Delete</Text>
								</TouchableOpacity>
							</View>
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	content: {
		paddingHorizontal: 10,
	},
	list: {
		marginTop: 20,
		width: "100%",
		height: "100%",
	},
	todo: {
		color: "white",
		fontSize: "18px",
		padding: 15,
		marginVertical: 10,
		backgroundColor: "royalblue",
		flexGrow: 1,
		textAlign: "center",
	},
	elementContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	deleteText: {
		color: "white",
		fontSize: "18px",
		padding: 15,
		marginVertical: 10,
		backgroundColor: "red",
	},
});
