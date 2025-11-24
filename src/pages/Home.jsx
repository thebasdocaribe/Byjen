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
            <div className="flex items-center justify-center gap-6 mt-15 mb-5">
                <Link
                    to={"/Influencer"}
                    className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all"
                    >
                        Influenciador
                    </Link>
                    <Link
                    to={"/Empresa"}
                    className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all"
                    >
                        Empresas
                </Link>
            
            <Link
                to={"/Formulario"}
                className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all"
                >
                Formulario
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