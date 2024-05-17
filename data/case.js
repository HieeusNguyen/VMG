export const CASE = [
    {
        name: "CCCD",
        icon: require("../assets/img/cccd.png"),
        image: require("../assets/img/verify.png"),
        title: "Xác thực CCCD gắn chip",
        desc: "Xác thực thông tin thật giả của CCCD gắn chip và tích hợp với dịch vụ của C06.",
        act: [
            {
                act_1: "Bước 1: Xác thực toàn vẹn dữ liệu CA/PA/AA",
                act_2: "Bước 2: Xác thực với C06.",
                act_3: "Bước 3: Hiển thị thông tin của chủ thẻ",
            },
        ],
    },
    {
        name: "eKYC",
        icon: require("../assets/img/ekyc.png"),
        image: require("../assets/img/verify2.png"),
        title: "Xác thực eKYC",
        desc: "Xác thực thông tin thật giả của CCCD gắn chip, eKYC và tích hợp với dịch vụ của C06.",
        act: [
            {
                act_1: "Bước 1: Xác thực toàn vẹn dữ liệu CA/PA/AA",
                act_2: "Bước 2: Xác thực với chủ thể sống",
                act_3: "Bước 3: Xác thực với C06.",
                act_4: "Bước 4: Hiển thị thông tin của chủ thẻ và khuôn mặt",
            },
        ],
    },
];
