// import axios from "axios";

//오늘 날짜를 YYYY 형식으로 반환
const getToYearDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  return `${yyyy}`;
};

// thunk 에서 객체 처럼 접근하고 있으므로 기존 create()로 instance 생성 방식 -> 객체로 변경 (260401)
const axiosWarning = {
  // SERVICE_KEY: '',
  // BASE_URL: 'https://app12.green-meerkat.kro.kr/B552584',
  SERVICE_KEY: import.meta.env.VITE_AIR_QUALITY_KEY,
  BASE_URL: '/api/air/B552584',
  RETURN_TYPE: 'json',
  YEAR: getToYearDate(),
}

export default axiosWarning;