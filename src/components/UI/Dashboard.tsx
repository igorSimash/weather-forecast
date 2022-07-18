// @ts-ignore
import React, {useState} from 'react';
// @ts-ignore
import {Days, Months} from '../../utils/getDayOrMonth.ts'

const Dashboard = ({isDarkMode, darkMode}) => {
    return (
        <div className={`px-5 sm:px-2 bg-white text-black w-full flex justify-between
         ${darkMode && 'bg-slate-900 text-gray-300'}`}>
            <div className={'my-2 flex brightness-125'}>
                <img className={'w-14 my-auto sm:w-8 sm:h-8'} src="https://cryptologos.cc/logos/aave-aave-logo.png"
                     alt=""/>
                <div className={'my-auto text-2xl ml-2 sm:text-sm'}>Aealthy</div>
            </div>
            <div className={'my-auto mx-auto text-2xl tracking-wider sm:text-sm sm:tracking-normal text-center'}>
                {Days[(new Date()).getDay()]}, {(new Date()).getDate()}th {Months[(new Date()).getMonth()]}
            </div>
            <div className={'my-auto flex'}>
                <span
                    className={'uppercase tracking-wider sm:tracking-normal my-auto mx-2 sm:text-sm sm:lowercase'}>Light</span>
                <label className={'switch'}>
                    <input type="checkbox" onClick={isDarkMode} defaultChecked={darkMode}/>
                    <span className={'slider'}></span>
                </label>
                <span
                    className={'uppercase tracking-wider sm:tracking-normal my-auto mx-2 sm:text-sm sm:lowercase'}>Dark</span>
            </div>
        </div>
    );
};

export default Dashboard;