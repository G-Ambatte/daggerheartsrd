import './App.css'
import './fonts.css'

import { useState } from 'react'

import Header from './components/Header/header';

import Input from './components/input';
import Result from './components/Result/result';

function App() {
  const [data, setData] = useState();
  const [type, setType] = useState('adversary');

  // const loadHomebrewery = function(){
  //   const url = 'http://localhost:8000/new';
  //   const id = 'tempHB';

  //   const iframe = document.createElement('iframe');
  //   iframe.id = id;
  //   iframe.style = 'display: none;';
  //   window.addEventListener('messagingReady', async ()=>{
  //     console.log('Messaging ready');
  //     iframe.contentWindow.postMessage('myTestContent', url);
  //   });
  //   window.addEventListener('message', async (e)=>{
  //     console.log('APItoHB RX:', e.data);
  //     if(e.data == 'complete'){
  //       iframe.remove();
  //     }
  //   });

  //   iframe.src = url;
  //   document.body.appendChild(iframe);
  // };

  return (
    <div className='App'>
      <Header />
      <div>
        <a href='https://homebrewery.naturalcrit.com/new'>The Homebrewery - New Page</a>
        {/* <button onClick={()=>loadHomebrewery()}>LOAD TO HOMEBREWERY</button> */}
        <Input setData={setData} type={type} setType={setType}></Input>
        <Result data={data} type={type}></Result>
      </div>
    </div>
  )
}

export default App
