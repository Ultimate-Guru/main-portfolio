// MIT License

// Copyright (c) 2024 Oluwatosin

import ProjectCard from "./ProjectCard";

import project1 from '../assets/images/interface.png'
import project2 from '../assets/images/space-img.png'
import project3 from '../assets/images/mytesla.png'
import project4 from '../assets/images/myestate.png'
import project5 from '../assets/images/furnishop.png'
import project6 from '../assets/images/journal.png'

const works = [
    {
        imgSrc: project1,
        title: 'Appointment Interface',
        tags: ['Development', 'JSON'],
        projectLink: 'https://react-interface-livid.vercel.app/'
    },
    {
        imgSrc: project2,
        title: 'Responsive Space Website',
        tags: ['Development', 'Intuitive Design'],
        projectLink: 'https://space-website-swart.vercel.app/'
    },
    {
        imgSrc: project3,
        title: 'Tesla Configuration',
        tags: ['Development', 'Configuration'],
        projectLink: 'https://tesla-configuration-plum.vercel.app/'
    },
    {
        imgSrc: project4,
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://estate-management-website.vercel.app/'
    },
    {
        imgSrc: project5,
        title: 'Furniture website',
        tags: ['furniture', 'Development'],
        projectLink: 'https://furniture-site-khaki.vercel.app/'
    },
    {
        imgSrc: project6,
        title: 'Offline-Journal',
        tags: ['Web-design', 'Development', 'Offline', 'Javascript'],
        projectLink: 'https://offline-journal-iota.vercel.app/'
    },
];

const Work = () => {
    return (
        <section id="work" className="section">

            <div className="container">

                <h2 className="headLine-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                classes='reveal-up'
                            />
                        ))
                }
                </div>

            </div>

        </section>
    );
}

export default Work;