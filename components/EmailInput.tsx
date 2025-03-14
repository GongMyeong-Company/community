import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import InputField from './InputField';

function EmailInput() {
  const {control, setFocus} = useFormContext()

  return (
       <Controller 
            name= "email"
            control={control}
            rules={{
                validate: (data: string)=>{
                    if(data.length === 0){
                        return '이메일을 입력해주세요.';
                    }
                    if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(data)){
                        return '올바른 이메일 형식이 아닙니다.';
                    }
                }
            }}
            render={({field: {onChange, value}, fieldState: {error}})=> (
                <InputField 
                    autoFocus
                    label="이메일" 
                    placeholder="이메일을 입력해주세요."
                    inputMode='email'
                    returnKeyType='next'
                    submitBehavior='submit'
                    onSubmitEditing={()=> setFocus("password")}
                    value={value}
                    onChangeText={onChange}
                    error={error?.message}
                />
            )}
       /> 
    )
}

const styles = StyleSheet.create({});

export default EmailInput;