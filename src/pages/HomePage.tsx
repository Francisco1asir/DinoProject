import React, { useEffect, useState } from 'react';
import { deleteDino, getDinosaurios, newDino } from '../firebase/FBdinos';
import './Home.css';
import { IDinos } from '../interfaces/IDinos';
import ReactPlayer from 'react-player';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { FBedit } from '../firebase/common/FBedit';
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const HomePage = () => {
  const [dinosaurios, setDinos] = useState<IDinos[]>([]);
  useEffect(() => {
    getDinosaurios().then((res) => {
      console.log(...res);
      setDinos([...res]);
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

  const { register, handleSubmit } = useForm<IDinos>();
  const onAddDinos = async (datadino: IDinos) => {
    console.log(datadino);
    await newDino(datadino);
    window.location.reload();
  };

  return (
    <section id='home'>
      <h1 id='tittle-home'>Ark Dinosaurs Search</h1>
      <form action='' id='formsearch'>
        <input type='search' className='inputsearch' placeholder='Search your Dino...' id='dinosearch'/>
        <h1 id='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></h1>
      </form>
      <ReactPlayer url={require('../videos/Arkvideo.mp4')}
        playing={true}
        loop={true}
        muted={true}
        width='100%'
        height='100%' />
      <div className='cardscollection'>
        {dinosaurios
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
            </div>
          ))}
      </div>
    </section>
  );
};

export default HomePage;

