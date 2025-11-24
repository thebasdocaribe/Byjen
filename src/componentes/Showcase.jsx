import React from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px' });

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline.to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase" className="relative w-full h-screen overflow-hidden mb-170">
            <div className="media absolute inset-0">
                <video src="/videos/ads.mp4" className="w-full h-full object-cover" loop muted autoPlay playsInline />
                <div className="mask absolute inset-0 flex items-center justify-center">
                    <img src="mascara-teste.svg" className="h-auto" alt="" />
                </div>
            </div>



        </section>
    )
}

export default Showcase
