// src/services/api.ts
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Update with actual base URL

if (!API_BASE_URL) {
  throw new Error("API_BASE_URL is not defined");
}

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getThreads = () => api.get("/onebox/list");
export const getThreadById = (threadId: string) =>
  api.get(`/onebox/${threadId}`);
export const deleteThreadById = (threadId: string) =>
  api.delete(`/onebox/${threadId}`);
export const sendReply = (threadId: string, replyData: any) =>
  api.post(`/reply/${threadId}`, replyData);
