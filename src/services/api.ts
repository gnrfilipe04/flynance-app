import axios from "axios";
import { IAuthParams } from "../interfaces/IAuthParams";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const getUsers = async () => {
    return await api.get("/users");
};

export const getTransactions = async () => {
    return await api.get("/transactions");
};

export const authentication = async (params: IAuthParams) => {
    return await api.post("/auth", params);
};


