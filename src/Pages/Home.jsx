import React from "react";
import { useEffect , useState } from "react";
import Header from "../Components/Header";
import GaugeChart from "../Components/Gaugechart";
import LineGraph from "../Components/Graph";
import { Grid } from "@mui/material";
const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
 

    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const latitude = 52.52;
      const longitude = 13.41;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };
  return (
    <React.Fragment>
      <Header />
      <Grid  container>
        <Grid justifyContent="center" textAlign="center" style={{marginTop:"5rem"}} item md={6} xs={12}>
      <GaugeChart data={weatherData}/>
          <h1 style={{textAlign:"center"}}>
            Temperature {weatherData?.current_units?.temperature_2m}
          </h1>
        </Grid>
        <Grid item md={6} xs={12}>
<LineGraph data={weatherData}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Home;
