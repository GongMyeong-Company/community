import { createPost } from "@/api/post";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

function useCreatePost(){
    return useMutation({
        mutationFn: createPost,
        onSuccess: ()=>{
            router.replace("/");
            console.log('성공입니다.');
        },
    });
}

export default useCreatePost;