// MIT License
// Copyright (c) 2024 Oluwatosin

// NODE MODULES
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// REGISTER GSAP PLUGINS
gsap.registerPlugin(ScrollTrigger);

// Vercel Analytic Tracker
import { Analytics } from "@vercel/analytics/react"

// COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    useEffect(() => {
            const elements = gsap.utils.toArray('.reveal-up');

            elements.forEach((element) => {
                gsap.fromTo(
                    element,
                    { y: 50, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: element,
                            start: '-200 bottom',
                            end: 'bottom 80%',
                            scrub: true,
                        },
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.inOut',
                    }
                );
            });
        },[])

    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
            <Analytics />
        </ReactLenis>
    );

};

export default App;