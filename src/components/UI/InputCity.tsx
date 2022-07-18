// @ts-ignore
import React from 'react';

const InputCity = ({onInputChange, onBtnClick, value}) => {
    return (
        <div className={'flex justify-center my-10 h-8 sm:mx-3'}>
            <input
                className={'w-1/4 rounded-md pl-3 outline-0 shadow-lg shadow-black sm:w-4/5 md:w-3/5 lg:w-3/5'}
                value={value}
                id={'cityInput'}
                type="text"
                onChange={onInputChange}
                onKeyDown={(e) => e.key === 'Enter' && onBtnClick()}/>
            <button
                className={'border-black border-2 rounded-lg ml-3 px-4 transition-all font-semibold shadow-md shadow-black text-black hover:bg-gray-400 active:bg-slate-600 active:text-white hover:bg-opacity-40 sm:text-sm sm:px-2'}
                onClick={onBtnClick}
            >
                Choose
            </button>
        </div>
    );
};

export default InputCity;