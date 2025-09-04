import { MAP, WeatherType } from '../data/weather';

interface Props {
  weather: WeatherType;
}

export default function WeatherCard({ weather }: Props) {
  const info = MAP[weather.condition];
  return (
    <div className="@container p-4 border rounded max-w-full">
      <div className="flex flex-col items-center gap-2 @column:flex-col @row:flex-row">
        <img src={info.icon} alt={info.label} className="w-16 h-16" />
        <div className="text-center @row:text-left">
          <p className="font-semibold text-xl @tiny:text-sm">
            {weather.temperature}&deg;C
          </p>
          <p className="capitalize hidden @column:block">{info.label}</p>
        </div>
      </div>
    </div>
  );
}
