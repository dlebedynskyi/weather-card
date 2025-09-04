import {
  MAP,
  WeatherType,
  HourlyType,
  DailyType,
} from '../data/weather';

interface Props {
  data: WeatherType;
}

function formatHour(time: number) {
  const hour = time <= 12 ? time : time - 12;
  const ampm = time < 12 ? 'AM' : 'PM';
  return `${hour} ${ampm}`;
}

export default function WeatherCard({ data }: Props) {
  const info = MAP[data.now.condition];
  return (
    <div className="@container bg-blue-500 text-white rounded p-4 flex flex-col gap-4 w-full h-full">
      {/* Location */}
      <p className="hidden @sm:block">{data.where}</p>

      {/* Current conditions */}
      <div className="flex items-center justify-center gap-4 @sm:flex-col @md:flex-row @md:justify-start">
        <img src={info.icon} alt={info.label} className="w-16 h-16" />
        <div className="text-center @md:text-left">
          <p className="text-4xl font-semibold">{data.now.current}&deg;</p>
          <p className="hidden @sm:block text-sm">
            H {data.now.high}&deg; L {data.now.low}&deg;
          </p>
          <p className="hidden @sm:block capitalize">{info.label}</p>
        </div>
      </div>

      {/* Hourly forecast */}
      <div className="hidden @md:flex gap-4 justify-center">
        {data.hourly.map((hour: HourlyType) => (
          <div key={hour.time} className="flex flex-col items-center gap-1">
            <span className="text-sm">{formatHour(hour.time)}</span>
            <img
              src={MAP[hour.condition].icon}
              alt=""
              className="w-6 h-6"
            />
            <span className="text-sm">{hour.temp}&deg;</span>
            <div className="flex items-center gap-1">
              <img src="/assets/ic_raindrop.svg" alt="" className="w-3 h-3" />
              <span className="text-sm">{hour.rain}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Daily forecast */}
      <div className="hidden @lg:flex flex-col gap-2">
        {data.daily.map((day: DailyType) => (
          <div key={day.date} className="flex justify-between">
            <span className="basis-28 text-sm">{day.date}</span>
            <div className="flex items-center gap-2 w-24">
              <img
                src={MAP[day.condition].icon}
                alt=""
                className="w-6 h-6"
              />
              <span className="text-sm">
                {day.high}&deg; / {day.low}&deg;
              </span>
            </div>
            <div className="flex items-center gap-1 w-12">
              <img src="/assets/ic_raindrop.svg" alt="" className="w-3 h-3" />
              <span className="text-sm">{day.rain}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

