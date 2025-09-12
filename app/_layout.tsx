import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ClerkProvider} from '@clerk/clerk-expo'
import {tokenCache} from '@clerk/clerk-expo/token-cache'
import InitialLayout from "@/components/InitialLayout";

export default function RootLayout() {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <SafeAreaProvider>
                <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
                    <InitialLayout/>
                </SafeAreaView>
            </SafeAreaProvider>
        </ClerkProvider>
    );
}
