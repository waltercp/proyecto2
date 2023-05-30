import React from 'react';
import './headerPerfil.css';

const HeaderPerfil = () => {
    return (
        <div className='headerContenedor'>
            <div className='fotoContain'>
                <div className='FotoPerfil' >
                    <img src="icon.png" alt="" />
                </div>
            </div>

            <div className='perfilInfo'>

                <div className='headerinfo'>
                    <h3>Climas</h3>
                    <button>siguiendo</button>
                    <button>Enviar Mensaje</button>
                    <button>
                        <i className='bx bxs-user-pin'></i>
                    </button>
                </div>

                <div className='headerContainerEstados'>
                    <ul>
                        <li className='infoItem'>publicaciones</li>
                        <li className='infoItem'>Seguidores</li>
                        <li className='infoItem'>Seguidos</li>
                    </ul>
                </div>


                <div className='headerContainerInfo'>
                    <h4>Paisajes</h4>
                    <p>Lorem ipsum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur.</p>
                </div>


            </div>





            <div className='Etiquetas'>
                <ul>
                    <li className='etiquetaItem'>Publicaciones</li>
                    <li className='etiquetaItem'>Reels</li>
                    <li className='etiquetaItem'>Etiquetas</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderPerfil;
