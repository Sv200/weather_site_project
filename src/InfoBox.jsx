
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){

    const INIT_URL= "https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8Mg%3D%3D";
  
    const HOT_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=8Q7_a7VqFHYU2vtvTzm1f14ADvWnBYJYrkMplD-IDMU=";
 const COLD_URL = "https://images.unsplash.com/photo-1564314966935-6c2f60eb32a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDI%3D";
 const RAIN_URL = "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?b=1&s=170667a&w=0&k=20&c=3nGMfD-sXDLS5jwwLV89TcEstDn00juZJ--18xie-UM=";



    return ( 

        
    <div className="InfoBox">
<div className="cardContainer">

<Card   sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15   ? HOT_URL :COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       <p>Temprature = {info.temp}&deg;C</p>
       <p>Humidity = {info.humidity}</p>
       <p>Min Temp = {info.tempMin}&deg;C</p>
       <p>Max Temp = {info.tempMax}&deg;C</p>
       <p>The Weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
     
        </Typography>
      </CardContent>
    
    </Card>
    </div>
    </div>
    );
}