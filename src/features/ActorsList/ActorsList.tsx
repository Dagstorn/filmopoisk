import { Actor } from "@/shared/types";
import styles from "./ActorsList.module.css";
import ActorCard from "@/entities/actor/ui/ActorCard/ActorCard";
import ArrowBtn from "@/shared/components/ArrowBtn/ArrowBtn";

export default function ActorsList({ actors }: { actors: Actor[] }) {


    const scroll = (direction: "left" | "right") => {
        const container = document.getElementById('actorListContainer');
        console.log("container", container);
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
                <ArrowBtn className={styles.scrollBtnL} direction="left" onClick={() => scroll("left")} />
                <ArrowBtn className={styles.scrollBtnR} direction="right" onClick={() => scroll("right")} />
                <div id="actorListContainer" className={styles.actorsListContainer}>
                    {actors.map((actor) => (
                        <ActorCard actor={actor} />
                    ))}
                </div>
            </div>
        </div>
    )
}
