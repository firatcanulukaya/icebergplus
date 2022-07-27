import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../config/constants";
import React from "react";

const ContactRow = ({name, subtitle, onPress, style}) => {
    return (
        <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
            <View style={styles.avatar}>
                <Text
                    style={styles.avatarLabel}>{name.split(' ').reduce((prev, current) => `${prev}${current[0]}`, '')}</Text>
            </View>

            <View style={styles.textsContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color={colors.secondaryColorAlt}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textsContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        color: colors.primaryTextColor
    },
    subtitle: {
        marginTop: 2,
        fontSize: 14,
        color: colors.secondaryTextColor
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.secondaryColorAlt,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarLabel: {
        color: colors.secondaryColor
    }

})

export default ContactRow;
