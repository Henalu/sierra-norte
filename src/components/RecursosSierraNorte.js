import React from 'react';
import { NavLink } from 'react-router-dom';
import cruz from '../img/Cruz Roja.png'
import Map from './Map';
import logo_sara from '../img/logo_sara.png'

const RecursosSN = () => {
    return (
        <div id='home' className='rSn'>
            <div>
                <img id="logosara1" src={logo_sara} alt="" />
            </div>
            <Map width={"100%"} height={"200px"}></Map>
            <div>
                <img id="logosara2" src={logo_sara} alt="" />
            </div>
            <div id="restocontainer">
                <div id="noestassola">
                    <h3>RECURSOS Y AYUDAS EN LA SIERRA NORTE.</h3>
                </div>
                <div id="textohome1">
                    <p>Pincha en el mapa interactivo de arriba si quieres descubrir puntos cercanos a ti.</p>
                    <p>Si prefieres, aquí tienes el listado de colaboradores:</p>
                </div>
                <div id="apartadoscontainer2">
                    <div className="apartados2">
                        <img src={cruz} alt="" />
                        <p>Entidades colaboradoras</p>
                    </div>
                    <div className="apartados2">
                        <img src={cruz} alt="" />
                        <p>Refugios de emergencia</p>
                    </div>
                    <div className="apartados2">
                        <img src={cruz} alt="" />
                        <p>Parada de taxis colaboradores</p>
                    </div>
                    <div className="apartados2">
                        <img src={cruz} alt="" />
                        <p>Alojamiento protegido</p>
                    </div>
                    <div className="apartados2 ultimo">
                        <img src={cruz} alt="" />
                        <p>Intervención especializada presencial</p>
                    </div>
                </div>
                <div id="apartadoscontainer">
                    <div className="apartados">
                        <div>
                            <h4>Entidades colaboradoras</h4>
                            <p>Hay diversos negocios locales que colaboran para ayudarte día a día.</p>
                        </div>
                        <NavLink to='/recursossierranorte'><button className="vermas" disabled>VER LISTADO</button></NavLink>
                        
                    </div>
                    <div className="apartados">
                        <div>
                            <h4>Refugios de emergencia</h4>
                            <p>Conoce más acerca de estos lugares de emergencia puntuales de la red de Cruz Roja.</p>
                        </div>
                        <NavLink to='/recursossierranorte'><button className="vermas" disabled>VER REFUGIOS</button></NavLink>

                        
                    </div>
                    <div className="apartados">
                        <div>
                            <h4>Parada de taxis colaboradores</h4>
                            <p>Una red de taxistas colaboradores dan servicio a las necesidades de transporte de las víctimas.</p>
                        </div>
                        <NavLink to='/recursossierranorte'><button className="vermas" disabled>VER TAXIS COLABORADORES</button></NavLink>

                    </div>
                    <div className="apartados">
                        <div>
                            <h4>Alojamiento protegido</h4>
                            <p>Cruz Roja pone a tu disposición alojamiento protegido en caso de que lo necesites.</p>
                        </div>
                        <NavLink to='/recursossierranorte'><button className="vermas" disabled>SABER MÁS</button></NavLink>

                    </div>
                    <div className="apartados ultimo">
                        <div>
                            <h4>Intervención especializada presencial</h4>
                            <p>Sabemos que necesitas a una persona al otro lado y gracias a nuestros voluntarios te damos apoyo.</p>
                        </div>
                        <NavLink to='/recursossierranorte'><button className="vermas" disabled>VER RECURSOS</button></NavLink>
                    </div>
                </div>
            </div>
            <a href="https://www.amazon.es/"><button id="salirrapido"> <strong>SALIR RÁPIDO </strong>  </button></a>
        </div>
    )
}
export default RecursosSN
