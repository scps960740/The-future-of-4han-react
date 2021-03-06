export const API_ROOT = "https://ptx.transportdata.tw/MOTC";
export const STATION_API = `${API_ROOT}/v2/Rail/THSR/Station?format=JSON`;

export function getTimeTableApi(start, end, date) {
  return `${API_ROOT}/v2/Rail/THSR/DailyTimetable/OD/${start}/to/${end}/${date}?$top=30&$format=JSON`;
}
