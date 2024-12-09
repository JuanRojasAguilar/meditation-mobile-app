import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
	});
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="meditate/[id]"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="index"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
};

export default RootLayout;
