"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Stars from "@/components/common/Stars";
import { tourData } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";

export default function TourSlider() {
  return (
    <section className="layout-pt-xl layout-pb-xl relative">
      <div className="sectionBg -w-1530 rounded-12 "></div>

      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Other Popular Choices</h2>
          </div>

          {/* <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div> */}
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div
            data-aos="fade-up"
            data-aos-delay=""
            className="row y-gap-30 pt-40 sm:pt-20"
          >
            {tourData.map((elm, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <a
                  href="#"
                  className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
                >
                  <div className="tourCard__header">
                    <div className="tourCard__image ratio ratio-28:20">
                      <Image
                        width={421}
                        height={301}
                        src={elm.imageSrc}
                        alt="image"
                        className="img-ratio"
                      />
                    </div>

                    {/* <button className="tourCard__favorite">
                              <i className="icon-heart"></i>
                            </button> */}
                  </div>

                  <div className="tourCard__content px-20 py-10">
                    <div className="tourCard__location d-flex items-center text-13 text-light-2">
                      <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                      {elm.location}
                    </div>

                    <h3 className="tourCard__title text-16 fw-500 mt-5">
                      <span>{elm.visaType}</span>
                    </h3>

                    <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                      <div className="d-flex items-center">
                        <i className="icon-clock text-16 mr-5"></i>
                        Get Visa in {elm.visaArrivalDay} Days
                      </div>

                      <div>
                        From{" "}
                        <span className="text-16 fw-500">${elm.mainFee}</span>
                        <p
                          className="m-0 p-0"
                          style={{
                            fontSize: ".8em",
                          }}
                        >
                          {" "}
                          + {elm.additionalFee} (Fees + Tax){" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider1-prev prev1">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next next1">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
