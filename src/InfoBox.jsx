import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
 let RAIN_URL="https://images.unsplash.com/photo-1503429134808-fdf0cd4e1bfa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 let COLD_URL="https://images.unsplash.com/photo-1505322266409-1c77f8b33a8a?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 
 return (
    <div className="infobox">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80?RAIN_URL:info.temp>20? 
            HOT_URL :info.temp<20? 
            COLD_URL : null}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>20? 
            <WbSunnyIcon/> :info.temp<20? 
            <AcUnitIcon/> : null}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <h3></h3>
            <p>temperature : {info.temp}&deg;C</p>
            <p>Minimum temperature : {info.tempMin}&deg;C</p>
            <p>Maximum temperature : {info.tempMax}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>The weather can be described as {info.description} and 
            it feels like {info.feelsLike}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    )
}