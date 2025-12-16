import { useEffect, useEffectEvent, useState } from "react";
import type { DayT } from "../types/types";

export default function Door({day}:{day:DayT}){

    const [enabled, setEnabled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        let date = new Date();
        setEnabled(
            date.getMonth() == 11 
            && date.getDate() >= day.day
        )
    },[])

    return <div className={`w-36 h-36 rounded-md flex flex-col gap-0 p-2 duration-500
    ${enabled ? "cursor-pointer bg-gray-400" : "cursor-not-allowed bg-gray-700"} ${open?"bg-yellow-500!":""}`} onClick={()=>{
        setOpen(enabled)
    }}>
        <div className="h-3/4 flex grow relative perspective-[400px]">
            <p className="absolute top-1/2 left-1/2 -translate-1/2">{day.text}</p>
            <div className={`bg-yellow-800 w-1/2 h-full border border-black origin-left duration-500 
                ${open? "-rotate-y-100":"rotate-y-0"}`}></div>
            <div className={`bg-yellow-800 w-1/2 h-full border border-black origin-right duration-500 
                ${open? "rotate-y-100":"rotate-y-0"}`}></div>
        </div>
        <p>{day.day}</p>
    </div>
}