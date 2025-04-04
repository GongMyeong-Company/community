import CustomButton from "@/components/CustomButton";
import DescriptionInput from "@/components/DescriptionInput";
import TitleInput from "@/components/TitleInput";
import useGetPost from "@/hooks/queries/useGetPost";
import useUpdatePost from "@/hooks/queries/useUpdatePost";
import { ImageUri } from "@/types";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

type FormValues= {
    title: string;
    description: string;
    imageUris: ImageUri[];
}

export default function PostUpdateScreen () {
    const {id} = useLocalSearchParams();
    const {data:post} = useGetPost(Number(id));
    const navigation = useNavigation();
    const updatePost = useUpdatePost();

    const postForm = useForm<FormValues>();
    //     defaultValues: {
    //         title: data?.title,
    //         description: data?.description,
    //         imageUris: data?.imageUris,
    //     },
    // });

    useEffect(()=>{
        if (post) {
            postForm.reset({
                title: post.title,
                description: post.description,
                imageUris: post.imageUris,                
            });
        }
    }, [post, postForm]);

    const onSubmit = (formValues: FormValues)=>{
        updatePost.mutate({
            id: Number(id),
            body: formValues,
        }, {
            onSuccess: () => router.back(),
        })
    };

    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <CustomButton 
                    label="수정" 
                    size="medium" 
                    variant="standard" 
                    onPress={postForm.handleSubmit(onSubmit)} 
                />
            ),
        });
    }, []);

    return (
        
        <FormProvider {...postForm}>
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <TitleInput />
            <DescriptionInput />
            </KeyboardAwareScrollView>
        </FormProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        gap: 16,
    },
})