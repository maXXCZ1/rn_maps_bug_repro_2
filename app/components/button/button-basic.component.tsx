import React from "react";
import {View} from "react-native";


export const ButtonContainer = ({ children }: { children: React.ReactNode }) => (
    <View style={{ marginVertical: 8 }}>{children}</View>
);
