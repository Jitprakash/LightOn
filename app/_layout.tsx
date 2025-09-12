import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ClerkProvider, useAuth} from '@clerk/clerk-expo'
import {tokenCache} from '@clerk/clerk-expo/token-cache'
import InitialLayout from "@/components/InitialLayout";
import {ConvexReactClient} from "convex/react";
import {ConvexProviderWithClerk} from "convex/react-clerk";

export default function RootLayout() {

    const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL as string);
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <SafeAreaProvider>
                    <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
                        <InitialLayout/>
                    </SafeAreaView>
                </SafeAreaProvider>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
