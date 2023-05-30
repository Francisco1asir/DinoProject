import { Swiper, SwiperSlide } from "swiper/react";
import "./Dinos.css";
import { Pagination } from "swiper";
import React, { useEffect, useState, useRef } from 'react'
import { getDinosaurios, getDinosauriosTerrestres, newDino } from '../firebase/FBdinos'
import { IDinos } from '../interfaces/IDinos'
import ReactPlayer from "react-player";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export const TerrestresPage = () => {
  const [dinosaurios, setDinos] = useState<IDinos[]>([])
  useEffect(() => {
    getDinosauriosTerrestres()
      .then(res => {
        console.log(...res)
        setDinos([...res])
      });
  }, []);
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if ((e.target as HTMLInputElement).matches('#dinosearch')) {
        const inputValue = (e.target as HTMLInputElement).value.toLowerCase();
        document.querySelectorAll('.items').forEach((dino) => {
          const dinoName = dino?.textContent?.toLowerCase() || '';
          if (dinoName.toLowerCase().startsWith(inputValue)) {
            dino.classList.remove('none');
          } else {
            dino.classList.add('none');
          }
        });
      }
    };
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return (
    <>
      <ReactPlayer
        url={require('../videos/Arkvideo2.mp4')}
        playing={true}
        loop={true}
        muted={true}
        width='100%'
        height='100%'
      />
      <h1 id='tittle-home'>Dinosaurios Terrestres</h1>
      <form action='' id='formsearch'>
        <input type='search' className='inputsearch' placeholder='Search your Dino...' id='dinosearch'/>
        <h1 id='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></h1>
      </form>
      <div className='cardscollection'>
        {dinosaurios
          .slice(0, 100)
          .map((dino) => (
            <div className='items'>
              <figure id='figimg'>
                <img id='dinosimg' src={dino.imagen} alt='' />
              </figure>
              <h1 key={dino.dinoname}>{dino.dinoname}</h1>
              <p className='dinodescript'>{dino.descript}</p>
              <div className='cntdatos'>
                <img className='dinopeso' src='https://www.dododex.com/media/item/Health.png' alt='' />
                <h3>{dino.salud}</h3>
                <img className='dinopeso' src='https://www.dododex.com/media/item/Stamina.png' alt='' />
                <h3>{dino.stamina}</h3>
                <img className='dinopeso' src='https://www.dododex.com/media/item/Weight.png' alt='' />
                <h3>{dino.peso}</h3>
              </div>
              <div className="btns">
            </div>
            </div>
          ))}
      </div>


    </>
  );
}
