import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { SignIn } from "@clerk/clerk-expo/web";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  return (
    <ClerkProvider publishableKey={process.env.XPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <SignedIn>
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
    </SignedIn>
    <SignedOut>
      <text>SignOut</text>
    </SignedOut>
    </ClerkProvider>
  );
}
