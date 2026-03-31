// 미세 먼지 현황
import axios from "axios";

// const API_BASE_URL = "https://app12.green-meerkat.kro.kr/B552584/ArpltnInforInqireSvc";
const API_BASE_URL = "/api/air/B552584/ArpltnInforInqireSvc";

export const fineDustParams = {
  serviceKey: import.meta.env.VITE_AIR_QUALITY_KEY,
  dataTerm: "DAILY",
  ver: "1.5",
  pageNo: "1",
  numOfRows: "48",
  returnType: "json"
};

const axiosFineDustConfig = axios.create({
  baseURL: API_BASE_URL,
  // 측정소 이름 인코딩 방지
  paramsSerializer: (params) =>
    Object.entries(params)                                                                                              
      .map(([key, value]) => `${key}=${value}`)                                                                         
      .join('&'),
})

export default axiosFineDustConfig;
