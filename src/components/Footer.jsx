// MIT License

// Copyright (c) 2024 Oluwatosin

import { MdChevronRight } from "react-icons/md";
import { ButtonPrimary } from "./Button";
import Logo from '../assets/images/My Logo.png'

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/Ultimate-Guru'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/oluwatosin-daniel-6b9a2632b/'
    },
    {
        label: 'Twitter X',
        href: 'https://twitter.com/Oluwatosin55902'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/oluwatosindaniel_/'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.io/Oluwatosin-the-encoder'
    }
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="headLine-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>

                        <ButtonPrimary
                            href='mailto:tosindaniel360@gmail.com'
                            label='Get in touch'
                            icon={<MdChevronRight />}
                            classes='reveal-up'
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className="mb-2 font-semibold reveal-up">SITEMAP</p>

                            <ul>
                                {
                                    sitemap.map(({ label, href }, key) => (
                                        <li key={key}>
                                            <a
                                                href={href}
                                                className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 font-semibold reveal-up">SOCIALS</p>

                            <ul>
                                {
                                    socials.map(({ label, href }, key) => (
                                        <li key={key}>
                                            <a
                                                href={href}
                                                target="_blank"
                                                className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-10">
                    <a
                        href="/"
                        className="logo reveal-up"
                    >
                        <img
                            src={Logo}
                            width={40}
                            height={40}
                            alt="Logo"
                            className="md:w-[70px] w-16 md:h-[50px] rounded-lg"
                        />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span className="text-zinc-200">Oluwatosin</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer