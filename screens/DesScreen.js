import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React from "react";

const DesScreen = ({ route, navigation }) => {
    const { title, image, act, desc } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    marginHorizontal: 20,
                    justifyContent: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../assets/img/back.png")}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
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
                <View style={{ width: 30 }}></View>
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
                <Image source={image} style={{ width: 200, height: 200 }} />
            </View>
            <Text
                style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 30,
                }}
            >
                {title}
            </Text>
            <View style={{ marginHorizontal: 50 }}>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginTop: 30,
                    }}
                >
                    {desc}
                </Text>
                {act.map((desc_act, index) => (
                    <View key={index} style={{ marginTop: 30 }}>
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            {desc_act.act_1}
                        </Text>
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            {desc_act.act_2}
                        </Text>
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            {desc_act.act_3}
                        </Text>
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            {desc_act.act_4}
                        </Text>
                    </View>
                ))}
            </View>
            <Pressable
                style={{
                    backgroundColor: "green",
                    paddingVertical: 15,
                    borderRadius: 24,
                    width: "80%",
                    position: "absolute",
                    bottom: 60,
                    left: 30,
                    right: 30,
                }}
                onPress={() => navigation.navigate("ScanScreen")}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}
                >
                    BẮT ĐẦU
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
});

export default DesScreen;
