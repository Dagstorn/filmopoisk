import { Actor } from "@/shared/types";
import styles from "./ActorsList.module.css";
import ActorCard from "@/entities/actor/ui/ActorCard/ActorCard";
import ArrowBtn from "@/shared/components/ArrowBtn/ArrowBtn";
import { useEffect, useRef, useState } from "react";

export default function ActorsList({ actors }: { actors: Actor[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const checkScrollPosition = () => {
            if (scrollRef.current) {
                setCanScrollLeft(scrollRef.current.scrollLeft > 0);
                const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
                setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
            }
        };

        checkScrollPosition();

        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScrollPosition);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        const container = document.getElementById('actorListContainer');
        if (container) {
            const scrollAmount = direction === 'left' ? -250 : 250;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.actorsTitleContainer}>
                <span className={styles.title}>Актеры</span>
            </div>
            <div className={styles.sliderContainer}>
                {canScrollLeft && <ArrowBtn className={styles.scrollBtnL} direction="left" onClick={() => scroll("left")} />}
                {canScrollRight && <ArrowBtn className={styles.scrollBtnR} direction="right" onClick={() => scroll("right")} />}
                <div ref={scrollRef} id="actorListContainer" className={styles.actorsListContainer}>
                    {actors.map((actor, index) => (
                        <ActorCard key={index} actor={actor} />
                    ))}
                </div>
            </div>
        </div>
    )
}
