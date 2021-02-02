import React, {useEffect, useState} from 'react';
import './Body.css';

function Body() {
  const [data, setData] = useState({
    '신석재': '',
    '윤현욱': '',
    '인두진': '',
    '이남헌': '',
  })

  useEffect(()=>{
    getData()
  },[])

  const getData = () => {
    fetch("https://poe.game.daum.net/character-window/getitems?accountName=newtypeid&realm=pc&character=EIEㅈ타트업", {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
        .then(response => response.json())
        .then(response => {
          console.log('---', response)
          const exp = response.character.experience
          setData({...data, '신석재': response.character.experience})
        });
  }

  return (
    <div className="Body">
      <div className="text-container">
        <div className="text-contents">asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf</div>
        <div className="text-contents">asdf asdf asdf asdf asdf asdf</div>
      </div>
    </div>
  );
}

export default Body;
