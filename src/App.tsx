import WeatherCard from './components/WeatherCard';
import { SAMPLE_WEATHER } from './data/weather';

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="resize overflow-auto border p-4 min-w-[150px] min-h-[150px]">
        <WeatherCard data={SAMPLE_WEATHER} />
      </div>
    </div>
  );
}

export default App;
