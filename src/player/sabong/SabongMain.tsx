import * as React from 'react';
import MediaCard from './MediaCard';
import { useState } from 'react';
import CurrentPoints from '../common/CurrentPoints';
import axios from 'axios';
import '../../css/mystyle.css'
import cockfight from '../../img/cockfight.jpg'

type Props = {};

const SabongMain = (props: Props) => {

  const [games, setGames] = useState([{ key: '1', label: 'test1', url: 'https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8' }, { key: '2', label: 'test2', url: 'https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8' }]);
  const [walletPoints, setWalletPoints] = useState(0);
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  React.useEffect(() => {
    console.log("token", token)
    console.log("headers", headers)
    axios
      .get("http://localhost:8080/home/loadDashBoard", { headers })
      .then((res) => {
        console.log(res.data);
        setWalletPoints(res.data.data.walletPoints);
      });
  }, [])

  return (
    <>
      <div className="body-background">
        <div className="card-body">
          <div className='row'>
            <div className='col'></div>
            <div className='col test-style'>
              <p>
                 Points: {walletPoints}
              </p>
            </div>
            <div className='col'>

            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-sm-4'>
              <MediaCard key={1} title={"SWW Event"} url={"https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8"} image={cockfight} />
            </div>
            <div className='col-sm-4'>
              <MediaCard key={1} title={"PSL Event"} url={"https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8"} image={cockfight} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SabongMain;