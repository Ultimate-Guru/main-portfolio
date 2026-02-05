// // MIT License
// // Copyright (c) 2024 Oluwatosin

import React from "react";
import { MdStar } from "react-icons/md";
import people2 from "../assets/images/people-2.jpg";
import people3 from "../assets/images/people-3.jpg";
import people4 from "../assets/images/people-4.jpg";
import people5 from "../assets/images/people-5.jpg";
import people6 from "../assets/images/people-6.jpg";

const Review = () => {

    const testimonials = [
        { id: 1, text: "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.", name: "Maxwell", img: people2 },
        { id: 2, text: "Impressive work! Fast loading times. Highly recommended developer. Efficient and detail-oriented.", name: "Daniel", img: people3 },
        { id: 3, text: "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.", name: "Emmanuel", img: people4 },
        { id: 4, text: "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.", name: "Favour", img: people5 },
        { id: 5, text: "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.", name: "Chris", img: people6 }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 3 >= testimonials.length ? 0 : prev + 3);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => prev - 3 < 0 ? Math.max(testimonials.length - 3, 0) : prev - 3);
    };

    const ratings = new Array(5).fill({
        icon: <MdStar />,
        style: { fontVariationSettings: '"FILL" 1' },
    });

    React.useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev + 1 >= testimonials.length ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [isMobile, testimonials.length]);


    return (
        <>
            <section className='section' id="reviews">
                <div className='container'>
                    <h1 className="reveal-up headLine-2 mb-8">What our customers say</h1>

                    <div className='hidden md:flex justify-end gap-2 mt-4 reveal-up'>
                        <div onClick={handlePrev} className='h-10 w-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-all text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left">
                                <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                            </svg>
                        </div>
                        <div onClick={handleNext} className='h-10 w-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-all text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className=' mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0 mt-12 md:mt-6 reveal-up'>

                        {testimonials.slice(currentIndex, isMobile ? currentIndex + 1 : currentIndex + 3).map((item) => (
                            <div key={item.id} className='bg-neutral-900 hover:-translate-y-1 transition duration-300 border border-neutral-800 rounded-2xl p-6 space-y-6 ring-1 ring-inset ring-zinc-50/25'>

                                {/* Stars */}
                                <div className="flex items-center mb-3">
                                    {ratings.map(({ icon, style }, key) => (
                                        <span
                                            key={key}
                                            style={style}
                                            className="material-symbols-rounded text-yellow-300 text-[18px]"
                                        >
                                            {icon}
                                        </span>
                                    ))}
                                </div>

                                <p className='text-zinc-400 text-sm/6 mb-8'>{item.text}</p>
                                <div className='flex items-center gap-4 mt-4'>
                                    <img src={item.img} alt="User Avatar" className='w-13 h-13 rounded-full object-cover' />
                                    <div>
                                        <p className='text-white font-semibold'>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden max-md:flex items-center justify-center mt-5 space-x-2">
                        {testimonials.map((_, index) => (
                            <span onClick={() => setCurrentIndex(index)} key={index}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? "bg-white"
                                    : "bg-white/20"
                                    }`}
                            >
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review;