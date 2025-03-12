import { Link, router, Stack } from "expo-router";
import Foundation from '@expo/vector-icons/Foundation';
import { colors } from "@/constants";
import CustomPressable from "@/components/CustomPressable";

export default function AuthLayout() {
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
                name= "index"
                options={{
                    title: "로그인",
                    headerShown: true,
                    headerLeft: ()=> (
                        <CustomPressable onPress={()=> router.replace("/")}>
                            <Foundation name="home" size={28} color={"black"} />
                        </CustomPressable>
                    )
                }}
            />
        </Stack>
    );
}