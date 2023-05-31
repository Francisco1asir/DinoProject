import React, { useState, useEffect } from 'react';
import { auth, provider } from '../firebase/common/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { User } from 'firebase/auth';
import { Navigate, redirect } from 'react-router-dom';
import ReactPlayer from "react-player";
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import './login.css'
import UnstyledTable from './Backend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import TransitionsModal from './Modal';
import { masivadinos } from '../firebase/FBdinos';
import UploadIcon from '@mui/icons-material/Upload';

export const Login = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Comprueba si hay un usuario autenticado 
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // Guarda la información del users
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    // Ventana cierre
    const confirmed = window.confirm('¿Estás seguro de que deseas cerrar sesión?');
    if (confirmed) {
      setUser(null);
      localStorage.removeItem('user');
    }
  };


  return (
    <section id='login'>
      <div>
        {user ? (
          <>
            <ReactPlayer
              url={require('../videos/Arkvideo.mp4')}
              playing={true}
              loop={true}
              muted={true}
              width='100%'
              height='100%'
            />
            <div className="cablogin">
              <h1 id='tittle-home'>Bienvenido, {user.displayName}!!! 😊</h1>
              {/* <p>{user.email}</p> */}
              <figure id='profilelog'>
                {user.photoURL && <img src={user.photoURL} id='fotoback' alt='Perfil' />}
                <div className="bocadillo-cuadrado">
                  <li><FontAwesomeIcon icon={faUser} /><span>Profile</span></li>
                  <button onClick={handleLogout} className='logoutbtn'><FontAwesomeIcon icon={faRightFromBracket} /><span>Log Out</span></button>
                </div>
              </figure>
            </div>

            <div className="btnslogin">
              <TransitionsModal />
              <Button variant="contained" className='profilebtn none2'><FontAwesomeIcon icon={faUser} /><span>Profile</span></Button>
              <Button variant="contained" onClick={handleLogout} className='logoutbtn none2'><FontAwesomeIcon icon={faRightFromBracket} /><span>Log Out</span></Button>
              <Button variant='contained' onClick={masivadinos} startIcon={<UploadIcon/>}>Cargar Datos</Button>
            </div>
            <UnstyledTable />
          </>
        ) : (
          <>
            <ReactPlayer
              url={require('../videos/Arkvideo.mp4')}
              playing={true}
              loop={true}
              muted={true}
              width='100%'
              height='100%'
            />
            {/* <div className="caja"> */}
            <Grid container justifyContent="center" className='login'>
              <h1>Login</h1>
              <Grid item xs={11}>
                <TextField
                  id="correo"
                  label="Correo"
                  type="text"
                  disabled
                  defaultValue="Disabled"
                  variant="filled"
                  sx={{ width: '100%', backgroundColor: 'white', borderRadius: '7px', marginTop: '25px' }}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="password"
                  label="Password"
                  type="text"
                  disabled
                  defaultValue="Disabled"
                  variant="filled"
                  sx={{ width: '100%', marginBottom: '12px', backgroundColor: 'white', borderRadius: '7px', marginTop: '25px' }}
                />
              </Grid>
              <button onClick={handleGoogleSignIn} className='btngoogle'><img src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png'></img><span>Sign In With Google</span></button>
            </Grid>
            {/* </div> */}
          </>
        )}
      </div>
    </section>
  );
};

