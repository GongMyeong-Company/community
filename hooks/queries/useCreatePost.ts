import { createPost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

function useCreatePost(){
    return useMutation({
        mutationFn: createPost,
        onSuccess: ()=>{
            router.replace("/");
            console.log('성공입니다.');
            queryClient.invalidateQueries({
                queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
            });
        },
    });
}

export default useCreatePost;