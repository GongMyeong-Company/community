import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form"
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import PasswordConfirmInput from "@/components/PasswordConfirmInput";

type FormValues = {
    email: string;
    password: string;
}

export default function LoginScreen () {
    const loginForm = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onsubmit = (formValues: FormValues) => {
        console.log('formValues', formValues);
    }

    return ( 
        <FormProvider {...loginForm}>
        <View style={styles.container}>
            <EmailInput />
            <PasswordInput />
        </View>
        <FixedBottomCTA label= "로그인하기" onPress={loginForm.handleSubmit(onsubmit)} />
        </FormProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        gap: 16,
    },
})