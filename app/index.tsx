import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
	duration: 1000,
	fade: true
});

const App = () => {
	const [appLoaded, setAppLoaded] = useState(false);
  const router = useRouter();

	useEffect(() => {
		setAppLoaded(true);
	}, []);

	const onLayoutRootView = useCallback(() => {
		if (appLoaded) {
			SplashScreen.hide();
		}
	}, [appLoaded]);

	return (
		<View className="flex-1" onLayout={onLayoutRootView}>
			<ImageBackground
				source={beachImage}
				resizeMode="cover"
				className="flex-1"
			>
				<AppGradient
					colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
				>
					<SafeAreaView className="flex-1 px-1 mt-0 justify-between">
						<View>
							<Text className="text-center text-white font-bold text-4xl">
								Simple Meditation
							</Text>
							<Text className="text-center text-white text-regular text-2xl mt-3">
								Symplifying Meditation for Everyone
							</Text>
						</View>
						<View>
							<CustomButton
								onPress={() => router.push("/nature-meditate")}
								title="Get Started"
							/>
						</View>
						<StatusBar style="light" />
					</SafeAreaView>
				</AppGradient>
			</ImageBackground>
		</View>
	);
}

export default App;
