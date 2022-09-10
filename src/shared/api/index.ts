import axios from "axios";
import { ICard } from "../types"

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const getPage = async () => {
    return await axios.get("api/card/getPage");
}

export const createCard = async (data: ICard) => {
    return await axios.post("api/card/create", data, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "multipart/form-data",
        },
    })
}