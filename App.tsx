import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "../Filinta/src/hooks/useCachedResources";
import useColorScheme from "../Filinta/src/hooks/useColorScheme";
import Navigation from "../Filinta/src/navigation";
import { Store } from "../Filinta/src/store/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Store>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Store>
    );
  }
}
