export type CONDITIONS =
  | 'PCLOUD_RAIN'
  | 'PCLOUD'
  | 'RAINY'
  | 'SUNNY';

export const MAP: Record<CONDITIONS, { label: string; icon: string }> = {
  PCLOUD_RAIN: {
    label: 'Partly cloudy w/Rain',
    icon: '/assets/ic_weather_partly_cloudy_rain.svg',
  },
  PCLOUD: {
    label: 'Partly cloudy',
    icon: '/assets/ic_weather_partly_cloudy.svg',
  },
  RAINY: {
    label: 'Rainy',
    icon: '/assets/ic_weather_rainy.svg',
  },
  SUNNY: {
    label: 'Sunny',
    icon: '/assets/ic_weather_sunny.svg',
  },
};

export interface NowType {
  current: number;
  condition: CONDITIONS;
  high: number;
  low: number;
}

export interface HourlyType {
  time: number;
  temp: number;
  condition: CONDITIONS;
  rain: number;
}

export interface DailyType {
  date: string;
  high: number;
  low: number;
  condition: CONDITIONS;
  rain: number;
}

export interface WeatherType {
  where: string;
  now: NowType;
  hourly: HourlyType[];
  daily: DailyType[];
}

export const SAMPLE_WEATHER: WeatherType = {
  where: 'Seattle',
  now: {
    current: 74,
    condition: 'PCLOUD',
    high: 76,
    low: 68,
  },
  hourly: [
    { time: 16, temp: 78, condition: 'SUNNY', rain: 0 },
    { time: 17, temp: 76, condition: 'SUNNY', rain: 0 },
    { time: 18, temp: 72, condition: 'RAINY', rain: 0 },
    { time: 19, temp: 73, condition: 'PCLOUD', rain: 0 },
    { time: 20, temp: 73, condition: 'PCLOUD', rain: 0 },
    { time: 21, temp: 72, condition: 'PCLOUD_RAIN', rain: 0 },
  ],
  daily: [
    { date: 'Wed, 5/21', high: 68, low: 58, condition: 'PCLOUD', rain: 100 },
    { date: 'Thurs, 5/21', high: 62, low: 52, condition: 'PCLOUD', rain: 20 },
    { date: 'Fri, 5/23', high: 68, low: 56, condition: 'PCLOUD', rain: 0 },
    { date: 'Sat, 5/24', high: 68, low: 56, condition: 'PCLOUD', rain: 20 },
    { date: 'Sun, 5/25', high: 68, low: 56, condition: 'PCLOUD', rain: 20 },
  ],
};

