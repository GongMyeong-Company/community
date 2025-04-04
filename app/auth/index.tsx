import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AuthScreen () {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("@/assets/images/main_logo.png")} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label="이메일 로그인" onPress={()=> router.push("/auth/login")} />
                <Link href={"/auth/signup"} style={styles.signupText}>이메일로 가입하기</Link>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    buttonContainer: {
        paddingHorizontal: 32,
        flex: 1,
    },
    logo: {
        width: 200,
        height: 200,
    },
    signupText: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 20,
    },
})