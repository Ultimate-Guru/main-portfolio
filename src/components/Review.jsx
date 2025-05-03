// MIT License
// Copyright (c) 2024 Oluwatosin

import ReviewCard from "./ReviewCard";
import people1 from "../assets/images/people-1.jpg";
import people2 from "../assets/images/people-2.jpg";
import people3 from "../assets/images/people-3.jpg";
import people4 from "../assets/images/people-4.jpg";
import people5 from "../assets/images/people-5.jpg";
import people6 from "../assets/images/people-6.jpg";

const reviews = [
    {
        content: "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
        name: "Grace",
        imgSrc: people1,
    },
    {
        content: "Impressive work! Fast loading times. Highly recommend.",
        name: "Maxwell",
        imgSrc: people2,
    },
    {
        content: "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
        name: "Chidera",
        imgSrc: people3,
    },
    {
        content: "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
        name: "Emmanuel",
        imgSrc: people4,
    },
    {
        content: "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
        name: "Favour",
        imgSrc: people5,
    },
    {
        content: "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
        name: "Emeka",
        imgSrc: people6,
    },
];

const Review = () => {
    return (
        <section className="section overflow-hidden" id="reviews">
            <div className="container">
                <h2 className="headLine-2 mb-8">What our customers say</h2>
                <div className="w-full">
                    <ReviewCard reviews={reviews} />
                </div>
            </div>
        </section>
    );
};

export default Review;