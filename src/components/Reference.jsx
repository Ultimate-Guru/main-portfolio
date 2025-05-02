// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  imageUrl: string;
}
const App: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      content:
        "This product completely transformed our workflow. The intuitive interface and powerful features helped us increase productivity by 40%. I couldn't be happier with the results and the excellent customer support.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20confident%20young%20woman%20with%20short%20brown%20hair%20in%20business%20attire%2C%20smiling%20at%20camera%2C%20soft%20lighting%2C%20neutral%20background%2C%20high%20quality%20professional%20headshot%2C%20realistic&width=200&height=200&seq=1&orientation=squarish",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "Innovate Solutions",
      content:
        "After trying numerous solutions, this is the only one that met all our requirements. The integration was seamless, and the performance exceeded our expectations. Our team was able to adapt quickly thanks to the well-designed user experience.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20asian%20man%20in%20his%2030s%20wearing%20business%20casual%20attire%2C%20confident%20smile%2C%20clean%20background%2C%20professional%20headshot%2C%20realistic%2C%20high%20quality%20corporate%20portrait&width=200&height=200&seq=2&orientation=squarish",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "GlobalConnect",
      content:
        "The level of customization available is impressive. We were able to tailor the solution to our specific needs without compromising on performance. The analytics features provide valuable insights that have helped us make better business decisions.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20latina%20woman%20with%20long%20dark%20hair%20in%20professional%20business%20attire%2C%20warm%20smile%2C%20neutral%20background%2C%20high%20quality%20headshot%2C%20realistic%20corporate%20portrait%2C%20soft%20lighting&width=200&height=200&seq=3&orientation=squarish",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Operations Director",
      company: "Apex Industries",
      content:
        "Implementation was quick and painless. Within days, we saw significant improvements in our operational efficiency. The ROI has been substantial, and we continue to discover new ways this solution adds value to our business processes.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20middle%20aged%20african%20american%20man%20in%20business%20suit%2C%20confident%20expression%2C%20clean%20professional%20background%2C%20corporate%20headshot%2C%20realistic%2C%20high%20quality%20portrait&width=200&height=200&seq=4&orientation=squarish",
    },
    {
      id: 5,
      name: "Olivia Thompson",
      position: "Creative Director",
      company: "Design Collective",
      content:
        "As a creative agency, we needed a solution that wouldn't limit our vision. This product not only met but exceeded our creative needs while maintaining excellent performance. The collaborative features have revolutionized how our team works together.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20woman%20with%20blonde%20hair%20styled%20professionally%2C%20creative%20business%20attire%2C%20artistic%20yet%20professional%20setting%2C%20warm%20lighting%2C%20high%20quality%20headshot%2C%20realistic&width=200&height=200&seq=5&orientation=squarish",
    },
    {
      id: 6,
      name: "James Patel",
      position: "Finance Manager",
      company: "Global Investments",
      content:
        "The detailed reporting capabilities have transformed how we analyze our financial data. The security features give us peace of mind, and the customer service team has been exceptional in addressing our specific industry requirements.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20an%20indian%20man%20in%20his%2040s%20wearing%20formal%20business%20attire%2C%20glasses%2C%20professional%20setting%2C%20neutral%20background%2C%20confident%20expression%2C%20high%20quality%20corporate%20headshot%2C%20realistic&width=200&height=200&seq=6&orientation=squarish",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience.
          </p>
        </div>
        <div className="testimonial-slider relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            className="py-10 px-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="px-2">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 h-full flex flex-col">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-indigo-100 shadow-sm">
                      <img
                        src={testimonial.imageUrl}
                        alt={`${testimonial.name}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fas fa-star text-yellow-400 mx-0.5"
                      ></i>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-center flex-grow">
                    "{testimonial.content}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev !w-12 !h-12 !rounded-full bg-white/80 shadow-md flex items-center justify-center cursor-pointer whitespace-nowrap !rounded-button after:content-[''] hidden md:flex">
            <i className="fas fa-chevron-left text-indigo-600"></i>
          </div>
          <div className="swiper-button-next !w-12 !h-12 !rounded-full bg-white/80 shadow-md flex items-center justify-center cursor-pointer whitespace-nowrap !rounded-button after:content-[''] hidden md:flex">
            <i className="fas fa-chevron-right text-indigo-600"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
