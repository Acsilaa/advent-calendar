import { useEffect, useState } from 'react'
import './App.css'
import type { DayT } from './types/types';
import axios from 'axios';
import Door from './components/Door';

function App() {
  const [days, setDays] = useState<DayT[]>([]);

  const getDays = async () => {
    setDays(((await axios.get<{days: DayT[]}>("/days.json")).data.days));
  }
  useEffect(()=>{
    getDays()
  },[])

  return (
    <div className='flex flex-wrap w-full max-w-7xl max-auto gap-15'>
      {days.map((d,i) => <Door key={i} day={d} />)}
    </div>
  )
}

export default App
