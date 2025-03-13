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
    passwordConfirm: string;
}

export default function SignupScreen () {
    const signupForm = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        }
    })

    const onsubmit = (formValues: FormValues) => {
        console.log('formValues', formValues);
    }

    return ( 
        <FormProvider {...signupForm}>
        <View style={styles.container}>
            <EmailInput />
            <PasswordInput />
            <PasswordConfirmInput />
        </View>
        <FixedBottomCTA label= "회원가입하기" onPress={signupForm.handleSubmit(onsubmit)} />
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