import React, { useEffect, useRef, useState } from 'react'
import BlurText from './BlurText';
import { Link } from "react-router-dom";

const Hero = () => {
    const videoRef = useRef();
    const [showTitle, setShowTitle] = useState(true); // agora começa como true

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    const handleAnimationComplete = () => {
        console.log('Animação de texto concluída!');
    };

    return (
        <section id="hero">
        
        {showTitle && (
          <div>
              <BlurText
                text="Byjen"
                delay={200} 
                animateBy="letters" 
                direction="top" 
                onAnimationComplete={handleAnimationComplete}
                className="text-6xl font-bold mb-4 text-white" 
              />
              <video 
                className='w-5xl'
                src="./videos/title.mp4"
                loop
                muted
                playsInline
              ></video>
          </div>
        )}
        
    <div className="w-full max-h-[600px] overflow-hidden flex justify-center">
        <video
          ref={videoRef}
          src="/videos/template_1.mp4"
          autoPlay
          className='w-full h-full'
          muted
          loop
          playsInline
        ></video>
    </div>

        <a href='https://wa.me/56938946998' target='_blank' className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all mb-3">
          Contacto
        </a>

        <p>Múltiples resultados para diferentes estrategias</p>
      </section>
    );
}

export default Hero;
