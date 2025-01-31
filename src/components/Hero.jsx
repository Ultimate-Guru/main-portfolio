// MIT License

// Copyright (c) 2024 Oluwatosin

import { MdArrowDownward, MdDownload } from "react-icons/md";
import HeroImg from "../assets/images/avatar.png";
// import HeroBanner from '../assets/images/myphoto(2).png'
import HeroBanner from '../assets/images/myphoto.png'
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
    return (
        <section className="pt-28 lg:pt-36" id="home">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src={HeroImg}
                                width={40}
                                height={40}
                                alt="Portrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="headLine-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Websites for the Future
                    </h2>

                    <div className="flex items-center gap-5">
                        <ButtonPrimary
                            href='mainresume.pdf'
                            download
                            label="Download CV"
                            icon={<MdDownload />}
                        />

                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon={<MdArrowDownward />}
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden ml-10">
                        <img
                            src={HeroBanner}
                            alt="Oluwatosin Pic"
                            className="w-full"
                            width={656}
                            height={800}
                        />
                    </figure>
                </div>

            </div>
        </section>
    );
};

export default Hero;