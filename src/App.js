import './styles/App.css';
import Dashboard from "./components/UI/Dashboard.tsx";
import MainBoard from "./components/UI/MainBoard.tsx";
import InputCity from "./components/UI/InputCity.tsx";
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
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
        await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next3days?unitGroup=metric&include=days&key=ZK2MXZRRQLZALBZL2QKJRN6FR&contentType=json`)
            .then(res => {
                setBadCity(false)
                setApiObj(res.data)
                console.log(res.data.days[0].temp);
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
