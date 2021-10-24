import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import useStyles from './WeatherPageStyles';
import { places, ten } from '../../utils/constants';

const WeatherPage = () => {
  const classes = useStyles();
  const { cityName } = useParams();
  console.log(cityName);
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const Fushion = () => {
    const t = data.main.feels_like;
    if (t >= 26) {
      return (
        <>
          <div className="fukusou">半袖</div>
          <div className="fukusou">半袖</div>
          <div className="fukusou">半袖</div>
        </>
      );
    } if (t >= 21 && t <= 25) {
      return <div className="fukusou">半袖  長袖  分かれ目</div>;
    } if (t >= 16 && t <= 20) {
      return <div className="fukusou">やや肌寒い  重ね着</div>;
    } if (t >= 12 && t <= 15) {
      return <div className="fukusou">軽めアウター必要</div>;
    } if (t >= 7 && t <= 11) {
      return <div className="fukusou">冬本番</div>;
    } if (t <= 6) {
      return <div className="fukusou">防寒レベル</div>;
    } return null;
  };
  React.useEffect(() => {
    fetch(
      `${process.env.REACT_APP_OW_API_URL}/weather/?q=${cityName}&APPID=${process.env.REACT_APP_OW_API_KEY}&units=metric`,
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [cityName]);
  if (loading) return <CircularProgress />;
  if (!data) return <CircularProgress />;
  return (
    <>
      <Card className={classes.card}>
        <CardHeader>{cityName}</CardHeader>
        <CardContent>
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-300
                  w-96 h-56 m-auto rounded-xl shadow-2xl
                  transform hover:scale-110 transition-transform
                  text-black relative"
          >
            <div>
              <div className="date">
                <div className="item">
                  <p>{places[data.name]}</p>
                </div>
                <div className="item">{data.weather[0].main}</div>
                <div className="item2">
                  <img
                    src={`${process.env.REACT_APP_OW_ICON_URL}/${data.weather[0].icon}.png`}
                    alt={data.weather[0].description}
                  />
                </div>
              </div>
              <div className="date2">
                <div className="item">
                  体感温度:
                  {data.main.feels_like}
                </div>
                <p>{ten[data.weather[0].main]}</p>
                <div className="item">
                  温度:
                  {data.main.temp}
                </div>
                <div className="item">
                  最高気温:
                  {data.main.temp.min}
                </div>
              </div>
              <div>
                <div className="fuku">
                  <p>服装: </p>
                  <Fushion />
                </div>
              </div>
              <div className="" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default WeatherPage;
