import { colors } from '@/constants';
import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import CustomPressable from "./CustomPressable";

interface CustomButtonProps extends PressableProps{
    label: string;
    size?: "medium" | "large";
    variant?: "standard" | "filled" | "outlined";
}

function CustomButton({label, size="large", variant="filled",...props}: CustomButtonProps) {
  return (
    <CustomPressable style={({pressed})=> [styles.container, styles[size], styles[variant],pressed && styles.pressed]}{...props}>
        <Text style={styles[variant]}>{label}</Text>
    </CustomPressable>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    large: {
        width: '100%',
        height: 44,
    },
    medium: {

    },
    filled: {
        backgroundColor: colors.ORANGE_600,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.WHITE,
    },
    standard: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.ORANGE_600,
    },
    outlined: {},
    pressed: {
        opacity: 0.8,
    },
});

export default CustomButton;