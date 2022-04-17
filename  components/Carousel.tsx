import { useMediaQuery, useTheme } from "@material-ui/core";
import React, { ReactNode, useCallback, useEffect, useState } from "react";

import { CarouselButton } from "./CarouselButton";
import { makeStyles } from "@material-ui/styles";
import useEmblaCarousel, {
    EmblaOptionsType,
} from 'embla-carousel-react'

export interface CarouselProps {
    options?: EmblaOptionsType,
    slides: ReactNode[]
}

export function Carousel(props: CarouselProps) {
    const { options, slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [dragging, setDragging] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    if (isMobile) {
        return (
            <div style={{
                position: "relative",
                margin: "0 auto",
            }}>
                <div
                    ref={emblaRef}
                    style={{
                        overflow: "hidden",
                        width: "100%"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            userSelect: "none",
                        }}>
                        {
                            slides.map((slide, i) => {
                                return (
                                    <div key={i}
                                        style={{
                                            position: "relative",
                                            minWidth: "100%"
                                        }}>
                                        <div
                                            style={{
                                                position: "relative",
                                                overflow: "hidden",
                                                margin: "0 auto",
                                                width: "20rem",
                                                borderRadius: "35px"
                                            }}>
                                            {slide}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <CarouselButton onClick={scrollPrev} left={true} />
                <CarouselButton onClick={scrollNext} left={false} />
            </div >
        );
    }

    return (
        <div style={{
            position: "relative",
            margin: "0 auto",
        }}>
            <div
                ref={emblaRef}
                style={{
                    overflow: "hidden",
                    width: "100%"
                }}>
                <div
                    style={{
                        display: "flex",
                        userSelect: "none",
                    }}>
                    {
                        slides.map((slide, i) => {
                            return (
                                <div key={i}
                                    style={{
                                        position: "relative",
                                        minWidth: "100%"
                                    }}>
                                    <div
                                        style={{
                                            position: "relative",
                                            overflow: "hidden",
                                            margin: "0 auto",
                                            width: "40rem",
                                            borderRadius: "35px"
                                        }}>
                                        {slide}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <CarouselButton onClick={scrollPrev} left={true} />
            <CarouselButton onClick={scrollNext} left={false} />
        </div >
    );
}
