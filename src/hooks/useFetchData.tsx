import { useEffect, useState } from "react";
import type { OpenMeteoResponse } from "../types/DashboardTypes";

export default function useFetchData(latitude: number, longitude: number) : OpenMeteoResponse | undefined {

    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`;

    const [data, setData] = useState<OpenMeteoResponse | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData: OpenMeteoResponse = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [URL]); 

    return data;

}
