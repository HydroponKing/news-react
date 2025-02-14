import axios from "axios";
import {CategoriesType, INews, ParamsType, CategoriesApiResponse} from "../interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

enum Status {
    Error = "error",
    Ok = "ok",
}

export interface NewApiResponse {
    news: INews[];
    page: number;
    status: Status;
}

export interface IParams {
    page_number?: number;
    page_size?: number;
    category?: CategoriesType | null;
    keywords?: string;
}

export const getNews = async (params?: ParamsType): Promise<NewApiResponse> => {
    try{
        const {
            page_number = 1,
            page_size = 10,
            category,
            keywords,
        } = params || {}
        const response = await axios.get<NewApiResponse>(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords,
            }
        })
        return response.data
    }catch (error){
        console.error('HI DEVELOPER ERROR IS - ', error)
        return { news: [], page: 1, status: Status.Error }
    }
}

export const getCategories = async (): Promise<CategoriesApiResponse> => {
    try{
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data
    }catch (error){
        console.error('HI DEVELOPER ERROR IS - ', error)
        return { categories: [], description: 1, status: "error" }
    }
}

export const getLatestNews = async (): Promise<NewApiResponse> => {
    try{
        const response = await axios.get<NewApiResponse>(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data
    }catch (error){
        console.error('HI DEVELOPER ERROR IS - ', error)
        return { news: [], page: 1, status: Status.Error }
    }
}