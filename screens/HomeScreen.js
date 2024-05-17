import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import { CASE } from "../data/case";

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <Text
                style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20,
                }}
            >
                VMG TECH
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    gap: 30,
                    marginHorizontal: 30,
                    marginTop: 50,
                }}
            >
                {CASE.map((cas, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            backgroundColor: "#fff",
                            width: 100,
                            height: 100,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 5,
                        }}
                        onPress={() =>
                            navigation.navigate("DesScreen", {
                                title: cas.title,
                                image: cas.image,
                                act: cas.act,
                                desc: cas.desc,
                            })
                        }
                    >
                        <Image
                            source={cas.icon}
                            style={{ width: 36, height: 36 }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {cas.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
