import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BestBees from "./screens/BestBees";
import Profile from "./screens/Profile";
import Dashboard from "./screens/Dashboard";
import Intrested from "./screens/Intrested";
import Chats from "./screens/Chats";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingScreen from "./screens/nestedScreens/SettingScreen";
import CompleteProfile from "./screens/nestedScreens/CompleteProfile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        headerTitle: " ",
        headerStatusBarHeight: 10,
        headerShown:true,
        headerStyle: {
          backgroundColor: "#deddd7",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BestBees"
        component={BestBees}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="diamond" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="flutter-dash" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Intrested"
        component={Intrested}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            headerTitle: "Settings",
            headerShown:true,
            headerTitleAlign:"center",
            headerStyle: {
              backgroundColor: "#deddd7",
            },
          }}
        />
        <Stack.Screen name="CompleteProfile"
        component={CompleteProfile}
        options={{
            headerTitle: "bumble date",
            headerTintColor:"#ffcb37",
            headerLargeStyle:true,
            headerShown:true,
            headerTitleAlign:"center",
            headerStyle: {
              backgroundColor: "white",
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
