// MIT License

// Copyright (c) 2024 Oluwatosin

import { MdArrowDownward, MdDownload } from "react-icons/md";
import HeroBanner from '/svg.svg'
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
    return (
        <section className="pt-28 lg:pt-40" id="home">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <h2 className="headLine-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Websites for the Future
                    </h2>

                    <div className="flex items-center gap-5">
                        <ButtonPrimary
                            href='Oluwatosin Resume.pdf'
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
                            className="w-full mr-36"
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