import React from "react";
import Hero from "../componentes/Hero";
import { Link } from "react-router-dom";
import SobreNos from "../componentes/SobreNos";
import Showcase from "../componentes/Showcase";
import Cards from "../componentes/Cards"
import Tech from "../componentes/Tech";

const Home = () => {
    return (
        <main className="w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden">
            <Hero />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-40 mb-5">
                <Link
                    to={"/Influencer"}
                    className="px-5 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all"
                    >
                        Influenciador
                    </Link>
                    <Link
                    to={"/Empresa"}
                    className="px-5 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all"
                    >
                        Empresas
                </Link>
            
            <Link
                to={"/Contact"}
                className="px-5 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all"
                >
                Contact
            </Link>
            </div>

            <Showcase />
            <SobreNos />
           
            <section>
                <Cards />
            </section>

            <Tech/>

        </main>
    )
}

export default Home;