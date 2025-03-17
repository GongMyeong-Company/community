import { Link, router, Stack } from "expo-router";
import { colors } from "@/constants";
import CustomPressable from "@/components/CustomPressable";
import { Feather } from "@expo/vector-icons";

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
        </Stack>
    );
}