import { Link, router, Stack } from "expo-router";
import { colors } from "@/constants";
import CustomPressable from "@/components/CustomPressable";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function PostLayout() {
    return(
        <Stack
            screenOptions={{
                headerTintColor: colors.BLACK,
                headerTitleAlign: 'center',
                contentStyle: {
                    backgroundColor: colors.WHITE,
                },
            }}
        >
            <Stack.Screen
                name= "write"
                options={{
                    title: "글쓰기",
                    headerShown: true,
                    headerLeft: ()=> (
                        <CustomPressable onPress={()=> router.replace("/")}>
                            <Feather name="arrow-left" size={28} color={"black"} />
                        </CustomPressable>
                    ),
                }}
            />
            <Stack.Screen
                name= "update/[id]"
                options={{
                    title: "수정",
                    headerShown: true,
                    headerLeft: ()=> (
                        <Feather name="arrow-left" size={28} color={"black"} onPress={()=>router.back()} />
                    ),
                }}
            />
            <Stack.Screen 
                name="[id]"
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerLeft: ()=>(
                        <Pressable onPress={()=>router.canGoBack()? router.back() : router.replace("/")}>
                            <Feather name="arrow-left" size={28} color={"black"} onPress={()=>router.back()} />
                        </Pressable>
                    )
                }}
            />
        </Stack>
    );
}