import axios from "axios";

export const getWeatherApi = async (city:string) => {
    return new Promise(async (resolve) => {
            await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=9c308fedbe2045ccbfb194318221103&q=${city}&days=5&aqi=no&alerts=no`)
                .then(res => {
                        return resolve(res.data)
                    }
                )
                .catch((err) => {
                    return err
                }
        )
        }
    )

}

