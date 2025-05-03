// MIT License
// Copyright (c) 2024 Oluwatosin

import PropTypes from "prop-types";
import { MdStar } from "react-icons/md";

// Importing SwiperJs modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Importing React Icons
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

const ratings = new Array(5).fill({
    icon: <MdStar />,
    style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ reviews }) => {
    return (
        <Swiper
            className="h-full"
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {reviews.map(({ content, imgSrc, name, company }, index) => (
                <SwiperSlide key={index} className="h-full w-full max-w-full flex-shrink-0">
                    <div className="h-full w-full flex flex-col justify-between bg-zinc-800 p-6 rounded-2xl">

                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-3">
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

                        {/* Content */}
                        <p className="text-zinc-400 mb-8">{content}</p>

                        <div className="flex items-center gap-3 mt-auto">
                            <figure className="img-box rounded-lg">
                                <img
                                    src={imgSrc}
                                    alt={name}
                                    height={44}
                                    width={44}
                                    loading="lazy"
                                    className="img-cover rounded-lg"
                                />
                            </figure>
                            <div>
                                <p className="text-white font-semibold">{name}</p>
                                {company && (
                                    <p className="text-xs text-zinc-400 tracking-wider">
                                        {company}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <button className="custom-prev absolute left-1 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-sky-400 hover:bg-sky-300 rounded-full flex items-center justify-center text-black text-xl">
               <MdArrowBack />
            </button>
            <button className="custom-next absolute right-1 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-sky-400 hover:bg-sky-300 rounded-full flex items-center justify-center text-black text-xl">
              <MdArrowForward />
            </button>
        </Swiper>

    );
};

ReviewCard.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string,
            imgSrc: PropTypes.string,
            name: PropTypes.string,
            company: PropTypes.string,
        })
    ).isRequired,
};

export default ReviewCard;