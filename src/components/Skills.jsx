// MIT License

// Copyright (c) 2024 Oluwatosin

import SkillCard from "./SkillCard";

import htmlImg from "../assets/images/html.svg";
import cssImg from "../assets/images/css3.svg";
import jsImg from "../assets/images/javascript.svg";
import gitImg from "../assets/images/gitimage.png";
import reactImg from "../assets/images/react.svg";
import tailwindImg from "../assets/images/tailwindcss.svg";

const skillItem = [
    { imgSrc: htmlImg, label: "HTML5", desc: "Web structure" },
    { imgSrc: cssImg, label: "CSS", desc: "User Interface" },
    { imgSrc: jsImg, label: "JavaScript", desc: "Interaction" },
    { imgSrc: gitImg, label: "Git", desc: "Version Control System" },
    { imgSrc: reactImg, label: "React", desc: "Framework" },
    { imgSrc: tailwindImg, label: "TailwindCSS", desc: "User Interface" },
];

const Skills = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headLine-2 reveal-up">Essential Tools I use</h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create
                    exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes='reveal-up'
                                />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;