import axios from "axios";

const BASE_URL = "https://api.daily.co/v1"; // Sẽ thay thế sau
const DAILY_API_KEY = "5c9569b233ce26b3193eeaceb4a599cdd2549ff297604841fd5a8f5d4612f3d5"; // Key API

// Hàm gọi API với header Authorization
const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${DAILY_API_KEY}`,
};

// Lấy danh sách phòng
export const fetchRooms = async () => {
    try {
        const response = await fetch(`${BASE_URL}/rooms`, {
            method: "GET",
            headers,
        });
        const json = await response.json();
        return json.data || [];
    } catch (error) {
        console.error("Lỗi khi lấy danh sách phòng:", error);
        return [];
    }
};

// Tạo phòng mới với tên và privacy
export const createRoom = (room) => {
    return fetch(`${BASE_URL}/rooms`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${DAILY_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: room,
            properties: {
                enable_screenshare: true,
                enable_chat: true,
                start_video_off: true,
                start_audio_off: false,
                lang: "en",
            },
        }),
    })
        .then((res) => res.json())
        .then((json) => {
            if (json.error) {
                throw new Error(json.error);
            }
            return json;
        })
        .catch((err) => {
            console.error("Lỗi khi tạo phòng:", err);
            throw err; // Ném lỗi để component xử lý
        });
};

