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
    <div className="@container bg-blue-500 text-white rounded p-[2cqmin] flex flex-col gap-[2cqmin] w-full h-full">
      {/* Location */}
      <p className="hidden @[400px]:block text-[3cqw]">{data.where}</p>

      {/* Current conditions */}
      <div className="flex items-center justify-center gap-[2cqmin] @[400px]:flex-col @[700px]:flex-row @[700px]:justify-start">
        <img src={info.icon} alt={info.label} className="w-[15cqw] h-[15cqw]" />
        <div className="text-center @[700px]:text-left">
          <p className="text-[9cqw] font-semibold">{data.now.current}&deg;</p>
          <p className="hidden @[400px]:block text-[3cqw]">
            H {data.now.high}&deg; L {data.now.low}&deg;
          </p>
          <p className="hidden @[400px]:block capitalize text-[3cqw]">{info.label}</p>
        </div>
      </div>

      {/* Hourly forecast */}
      <div className="hidden @[700px]:flex gap-[2cqmin] justify-center">
        {data.hourly.map((hour: HourlyType) => (
          <div key={hour.time} className="flex flex-col items-center gap-[1cqw]">
            <span className="text-[3cqw]">{formatHour(hour.time)}</span>
            <img
              src={MAP[hour.condition].icon}
              alt=""
              className="w-[6cqw] h-[6cqw]"
            />
            <span className="text-[3cqw]">{hour.temp}&deg;</span>
            <div className="flex items-center gap-[1cqw]">
              <img src="/assets/ic_raindrop.svg" alt="" className="w-[3cqw] h-[3cqw]" />
              <span className="text-[3cqw]">{hour.rain}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Daily forecast */}
      <div className="hidden @[1000px]:flex flex-col gap-[2cqmin]">
        {data.daily.map((day: DailyType) => (
          <div key={day.date} className="flex justify-between">
            <span className="basis-[30cqw] text-[3cqw]">{day.date}</span>
            <div className="flex items-center gap-[2cqw] w-[25cqw]">
              <img
                src={MAP[day.condition].icon}
                alt=""
                className="w-[6cqw] h-[6cqw]"
              />
              <span className="text-[3cqw]">
                {day.high}&deg; / {day.low}&deg;
              </span>
            </div>
            <div className="flex items-center gap-[1cqw] w-[15cqw]">
              <img src="/assets/ic_raindrop.svg" alt="" className="w-[3cqw] h-[3cqw]" />
              <span className="text-[3cqw]">{day.rain}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

