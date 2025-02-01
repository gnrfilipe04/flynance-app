import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Auth from './src/view/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="inverted" backgroundColor='transparent'/>
      <SafeAreaView style={{ flex: 1 }}>
        <Auth/>
      </SafeAreaView>
    </GestureHandlerRootView> 
  );
}
