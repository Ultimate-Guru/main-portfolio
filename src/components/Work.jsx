// MIT License

// Copyright (c) 2024 Oluwatosin

import ProjectCard from "./ProjectCard";

import project1 from '../assets/images/interface.png'
import project2 from '../assets/images/space-img.png'
import project3 from '../assets/images/remove-ease.vercel.app_.png'
import project4 from '../assets/images/myestate.png'
import project5 from '../assets/images/furnishop.png'
import project6 from '../assets/images/agencyai.png'

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
        title: 'Background Removal',
        tags: ['Development', 'Configuration', 'Integration', 'Responsive'],
        projectLink: 'https://remove-ease.vercel.app/'
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
        title: 'AI Agency Website',
        tags: ['Development', 'Form Integration', 'Light/Dark Mode'],
        projectLink: 'https://agencyai-webste.vercel.app/'
    },
];

const Work = () => {
    return (
        <section id="work" className="section">

            <div className="container">

                <h2 className="headLine-2 mb-8 reveal-up">
                    Project Highlights
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