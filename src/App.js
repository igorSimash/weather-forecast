import './App.css';
import {getWeatherApi} from './utils/getApi.ts'
import Dashboard from "./components/UI/Dashboard.tsx";
import MainBoard from "./components/UI/MainBoard.tsx";
import InputCity from "./components/UI/InputCity.tsx";
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {logDOM} from "@testing-library/react";
import axios from "axios";

function App() {
    const [city, setCity] = useState('')
    const [apiObj, setApiObj] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(localStorage.getItem('isDarkTheme') === 'true')
    const [badCity, setBadCity] = useState(false)

    if (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('isDarkTheme')) {
        setDarkMode(true)
        localStorage.setItem('isDarkTheme', true + '')
    }

    const btnClick = async () => {
        setIsOpen(false)
        await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9c308fedbe2045ccbfb194318221103&q=${city}&days=5&aqi=no&alerts=no`)
            .then(res => {
                setBadCity(false)
                setApiObj(res.data)
            })
            .catch(() => {
                setBadCity(true)
                setCity('')
            })
        setCity('')
        setIsOpen(true)
    }

    const changeTheme = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('isDarkTheme', !darkMode + '')
    }

    return (
        <div className={`App h-full w-full bg-gradient-to-b from-orange-300 to-indigo-500
        ${darkMode && "from-violet-400 to-indigo-800"}`}>
            <Dashboard darkMode={darkMode} isDarkMode={changeTheme}/>
            <InputCity onInputChange={(e) => setCity(e.target.value)}
                       onBtnClick={btnClick} value={city}/>
            <CSSTransition in={isOpen} timeout={300} classNames={'board'} unmountOnExit>
            {
                badCity
                    ?
                    <h1 className={'text-center text-red-700 underline font-bold text-3xl'}>City not found</h1>
                    :

                        <MainBoard darkMode={darkMode} apiObj={apiObj}/>
                    }
            </CSSTransition>
        </div>
    );
}

export default App;
