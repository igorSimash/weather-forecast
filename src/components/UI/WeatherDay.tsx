// @ts-ignore
import React from 'react';
import {SiRainmeter} from 'react-icons/si'
import {WiCloudy} from 'react-icons/wi'
import {BsSun} from 'react-icons/bs'
// @ts-ignore
import {Days} from '../../utils/getDayOrMonth.ts'

const WeatherDay = ({text, day, temp}) => {
    return (
        <div className={'flex flex-col uppercase text-center'}>
            <span className={'font-bold text-xl mx-auto sm:text-lg'}>
                {Days[(new Date(day)).getDay()].slice(0,3)}
            </span>
            {
                text.toLowerCase().includes('rain')
                    ?
                    <span className={'text-6xl mx-auto text-blue-500 mt-2 sm:text-5xl'}>
                        <SiRainmeter/>
                    </span>
                    :
                    text.toLowerCase().includes('cloud')
                        ?
                        <span className={'text-7xl mx-auto text-gray-600 mt-2 sm:text-5xl'}>
                            <WiCloudy/>
                        </span>
                        :
                        <span className={'text-6xl mx-auto text-yellow-400 mt-2 sm:text-5xl'}>
                            <BsSun/>
                        </span>
            }
            <span className={'text-3xl font-semibold tracking-wide mx-auto mt-2 sm:text-lg ' }>
                {temp}
            </span>
            <span className={'tracking-wider text-sm border-black border-b-2 pb-0.5 mx-auto mt-2 sm:tracking-normal sm:border-none'}>
                {text.toLowerCase().includes('rain')
                ?
                'rain'
                :
                text
                }
            </span>
        </div>
    );
};

export default WeatherDay;