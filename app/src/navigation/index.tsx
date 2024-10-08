import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import Home from "../features/Home";
import HomeScreen from "../features/Home/screens/Home";
import ContactListScreen from "../features/ContactList/screens/ContactListScreen";
import ContactDetailScreen from "../features/ContactList/screens/ContactDetailScreen";
import SeasonScreen from "../features/Task1/screens/SeasonScreen";

export const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ContactListScreen" component={ContactListScreen} />
            <Stack.Screen name="ContactDetailScreen" component={ContactDetailScreen} />
            <Stack.Screen name="SeasonScreen" component={SeasonScreen} />
        </Stack.Navigator>
    )
};