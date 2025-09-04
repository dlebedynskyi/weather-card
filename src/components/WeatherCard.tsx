import {
  MAP,
  WeatherType,
  HourlyType,
  DailyType,
} from '../data/weather';
import raindropIcon from '/assets/ic_raindrop.svg';

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
    <div className="@container bg-blue-500 text-white rounded-2xl p-[2cqmin] flex flex-col gap-[2cqmin] w-full h-full">
      {/* Location */}
      <p className="block text-[4cqw] @[11rem]:text-[3cqw] font-light">{data.where}</p>

      {/* Current conditions */}
      <div className="flex items-start gap-[2cqmin] @[11rem]:items-center @[27rem]:flex-row">
        <img src={info.icon} alt={info.label} className="w-[12cqw] h-[12cqw] @[11rem]:w-[15cqw] @[11rem]:h-[15cqw]" />
        <div className="flex-1">
          <div className="flex items-baseline gap-[2cqw] @[27rem]:flex-col @[27rem]:gap-0">
            <p className="text-[12cqw] @[11rem]:text-[9cqw] font-light leading-none">{data.now.current}&deg;</p>
            <div className="@[27rem]:mt-[1cqw]">
              <p className="capitalize text-[3cqw] @[11rem]:text-[3cqw] font-light">{info.label}</p>
              <p className="text-[3cqw] @[11rem]:text-[3cqw] font-light">
                H {data.now.high}&deg; L {data.now.low}&deg;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly forecast */}
      <div className="flex gap-[2cqmin] justify-between @[11rem]:justify-center overflow-hidden">
        {data.hourly.slice(0, 3).map((hour: HourlyType) => (
          <div key={hour.time} className="flex flex-col items-center gap-[1cqw] @[11rem]:hidden">
            <span className="text-[3cqw]">{formatHour(hour.time)}</span>
            <img
              src={MAP[hour.condition].icon}
              alt=""
              className="w-[6cqw] h-[6cqw]"
            />
            <span className="text-[3cqw]">{hour.temp}&deg;</span>
            <div className="flex items-center gap-[1cqw]">
              <img src={raindropIcon} alt="" className="w-[3cqw] h-[3cqw]" />
              <span className="text-[3cqw]">{hour.rain}%</span>
            </div>
          </div>
        ))}
        {data.hourly.slice(0, 5).map((hour: HourlyType) => (
          <div key={`medium-${hour.time}`} className="hidden @[11rem]:flex @[27rem]:hidden flex-col items-center gap-[1cqw]">
            <span className="text-[3cqw]">{formatHour(hour.time)}</span>
            <img
              src={MAP[hour.condition].icon}
              alt=""
              className="w-[6cqw] h-[6cqw]"
            />
            <span className="text-[3cqw]">{hour.temp}&deg;</span>
            <div className="flex items-center gap-[1cqw]">
              <img src={raindropIcon} alt="" className="w-[3cqw] h-[3cqw]" />
              <span className="text-[3cqw]">{hour.rain}%</span>
            </div>
          </div>
        ))}
        {data.hourly.map((hour: HourlyType) => (
          <div key={`large-${hour.time}`} className="hidden @[27rem]:flex flex-col items-center gap-[1cqw]">
            <span className="text-[3cqw]">{formatHour(hour.time)}</span>
            <img
              src={MAP[hour.condition].icon}
              alt=""
              className="w-[6cqw] h-[6cqw]"
            />
            <span className="text-[3cqw]">{hour.temp}&deg;</span>
            <div className="flex items-center gap-[1cqw]">
              <img src={raindropIcon} alt="" className="w-[3cqw] h-[3cqw]" />
              <span className="text-[3cqw]">{hour.rain}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Daily forecast */}
      <div className="hidden @[20rem]:flex flex-col gap-[2cqmin]">
        {data.daily.slice(0, 3).map((day: DailyType) => (
          <div key={`medium-${day.date}`} className="flex justify-between @[20rem]:flex @[30rem]:hidden">
            <span className="basis-[30cqw] text-[3cqw]">{day.date}</span>
            <div className="flex items-center gap-[2cqw] justify-center flex-1">
              <img
                src={MAP[day.condition].icon}
                alt=""
                className="w-[6cqw] h-[6cqw]"
              />
              <span className="text-[3cqw]">
                {day.high}&deg; / {day.low}&deg;
              </span>
            </div>
            <div className="flex items-center gap-[1cqw] justify-end">
              <img src={raindropIcon} alt="" className="w-[3cqw] h-[3cqw]" />
              <span className="text-[3cqw]">{day.rain}%</span>
            </div>
          </div>
        ))}
        {data.daily.map((day: DailyType) => (
          <div key={`full-${day.date}`} className="hidden @[30rem]:flex justify-between">
            <span className="basis-[30cqw] text-[3cqw]">{day.date}</span>
            <div className="flex items-center gap-[2cqw] justify-center flex-1">
              <img
                src={MAP[day.condition].icon}
                alt=""
                className="w-[6cqw] h-[6cqw]"
              />
              <span className="text-[3cqw]">
                {day.high}&deg; / {day.low}&deg;
              </span>
            </div>
            <div className="flex items-center gap-[1cqw] justify-end">
              <img src={raindropIcon} alt="" className="w-[3cqw] h-[3cqw]" />
              <span className="text-[3cqw]">{day.rain}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

