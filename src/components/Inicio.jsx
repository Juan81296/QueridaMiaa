import React from 'react'
import image from "../img/1.png"
import image2 from "../img/2.png"


export default function Inicio() {
  return (
      <main>
    <div className="panel welcome">
      <div>
        <h1>Queridaa mia !</h1>
        <p>Trajes de baño 👙 y más 💟</p>
        <p>📍Rodolfo Walsh 1898.</p>
        <p>📍San justo, Santa fe.</p>
      </div>
      <footer>
        <p>Buscá lo que encienda tu alma.</p>
      </footer>
    </div>
    <div className="panel about">
      <img src={image} alt="foto ilustrativa querida mia"/>
      <div className="text">
        <p>✨La vida es más linda aún descalzas y despeinadas, con la mente relajada y el alma en paz ✨</p>
      </div>
    </div> 
    <div className="panel photos">
      <div className="text">
        <h2>Bombachas !</h2>
        <p>💟Las que todas quieren!!!</p>
        <p>💟Sin costuras</p>
        <p>💟 Diseños originales</p>
        <p>😻Se usan como bikinis</p>
      </div>
      <div>
      <img src={image2} alt="foto bombachas segunda piel" />
      </div>
    </div>
  </main>
  )
}
