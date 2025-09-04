export const CONDITIONS = ['sunny', 'cloudy', 'rain'] as const;

export const MAP = {
  sunny: { label: 'Sunny', icon: '/assets/sun.svg' },
  cloudy: { label: 'Cloudy', icon: '/assets/cloud.svg' },
  rain: { label: 'Rainy', icon: '/assets/rain.svg' },
} as const;

export type WeatherCondition = (typeof CONDITIONS)[number];

export type WeatherType = {
  condition: WeatherCondition;
  temperature: number;
};

export const SAMPLE_WEATHER: WeatherType = {
  condition: 'sunny',
  temperature: 72,
};
