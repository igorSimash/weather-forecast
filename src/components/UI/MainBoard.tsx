// @ts-ignore
import React from 'react';
// @ts-ignore
import WeatherDay from "./WeatherDay.tsx";

const MainBoard = ({apiObj, darkMode}) => {
    return (
        <div className={'w-7/12 mx-auto h-4/6 sm:w-11/12 sm:h-4/6 md:w-10/12 lg:w-10/12'}>
            <div
                className={`uppercase flex h-1/2 justify-between bg-gradient-to-br from-indigo-600 to-orange-300 rounded-t-xl
                ${darkMode && "from-indigo-700 to-slate-900"}`}>
                <div className={'w-1/2 block self-center text-white'}>
                    <div className={'flex flex-col items-center text-center'}>
                        <span className={'font-semibold w-fit h-fit text-8xl sm:text-5xl'}>
                            {apiObj.current.temp_c}°
                        </span>
                        <span className={'w-fit h-fit text-lg tracking-widest sm:text-sm sm:mt-3'}>
                            {apiObj.current.condition.text}
                        </span>
                    </div>
                    <div className={'flex justify-around mt-4 sm:text-sm sm:mt-11'}>
                        <div className={'flex flex-col'}>
                            <span className={'tracking-widest sm:tracking-wide'}>
                                HUMIDITY
                            </span>
                            <span className={'mx-auto mt-2'}>
                                {apiObj.current.humidity}%
                            </span>
                        </div>
                        <div className={'flex flex-col'}>
                            <div className={'flex'}>
                                <span className={'tracking-widest sm:tracking-wide'}>
                                    WIND
                                </span>
                                <span className={'lowercase pl-1.5'}>
                                     {apiObj.current.wind_dir}
                                </span>
                            </div>
                            <span className={'mx-auto mt-2'}>
                                {apiObj.current.wind_kph} K/H
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'w-1/2 text-white flex justify-center items-center '}>
                    <span className={'text-2xl border-white shadow-underline h-1 rounded-xl tracking-widest'}>
                        {apiObj.location.name}
                    </span>
                </div>
            </div>
            <div className={`bg-white h-1/2 rounded-b-xl flex items-center
            ${darkMode && 'bg-neutral-200 text-black'}`}>
                <div className={'flex justify-around w-full'}>
                    {apiObj.forecast.forecastday.map((forecastDay, index) =>
                        <WeatherDay key={index} text={forecastDay.day.condition.text}
                                    temp={`${Math.round(forecastDay.day.mintemp_c)}° - ${Math.round(forecastDay.day.maxtemp_c)}°`}
                                    day={forecastDay.date}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainBoard;