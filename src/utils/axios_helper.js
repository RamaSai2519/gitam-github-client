import axios from "axios";

const MAIN_URL = "https://test.sukoonunlimited.com"
const DEV_URL = "http://localhost:8000"

const BASE_URL = process.env.ENV === 'main' ? MAIN_URL : DEV_URL

const raxios = axios.create({ baseURL: BASE_URL });

export default raxios;
