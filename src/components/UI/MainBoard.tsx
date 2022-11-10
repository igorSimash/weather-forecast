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
                            {apiObj.days[0].temp}°
                        </span>
                        <span className={'w-fit h-fit text-lg tracking-widest sm:text-sm sm:mt-3'}>
                            {apiObj.days[0].conditions}
                        </span>
                    </div>
                    <div className={'flex justify-around mt-4 sm:text-sm sm:mt-11'}>
                        <div className={'flex flex-col'}>
                            <span className={'tracking-widest sm:tracking-wide'}>
                                HUMIDITY
                            </span>
                            <span className={'mx-auto mt-2'}>
                                {apiObj.days[0].humidity}%aaaaaaaaaaaaaaaaaaaaaaaaaa
                            </span>
                        </div>
                        <div className={'flex flex-col'}>
                            <div className={'flex'}>
                                <span className={'tracking-widest sm:tracking-wide'}>
                                    WIND -
                                </span>
                                <span className={'lowercase pl-1.5'}>
                                     {apiObj.days[0].winddir}°
                                </span>
                            </div>
                            <span className={'mx-auto mt-2'}>
                                {apiObj.days[0].windspeed} K/H
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'w-1/2 text-white flex justify-center items-center '}>
                    <span className={'text-2xl border-white shadow-underline h-1 rounded-xl tracking-widest'}>
                        {apiObj.address}
                    </span>
                </div>
            </div>
            <div className={`bg-white h-1/2 rounded-b-xl flex items-center
            ${darkMode && 'bg-neutral-200 text-black'}`}>
                <div className={'flex justify-around w-full'}>
                    {apiObj.days.slice(1).map((forecastDay, index) =>
                        <WeatherDay key={index} text={forecastDay.conditions}
                                    temp={`${Math.round(forecastDay.tempmin)}° - ${Math.round(forecastDay.tempmax)}°`}
                                    day={forecastDay.datetime}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainBoard;