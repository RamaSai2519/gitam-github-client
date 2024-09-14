import axios from "axios";

const MAIN_URL = "https://proxy.sukoonunlimited.com"
const DEV_URL = "http://localhost:8000"

const BASE_URL = process.env.REACT_APP_ENV === 'main' ? MAIN_URL : DEV_URL;

const raxios = axios.create({ baseURL: BASE_URL });

export default raxios;
