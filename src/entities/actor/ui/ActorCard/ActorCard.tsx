import { Actor } from "@/shared/types";
import styles from "./ActorCard.module.css";

export default function ActorCard({ actor }: { actor: Actor }) {
    return (
        <div className={styles.container}>
            <img className={styles.actorPhoto} src={actor.photo} alt="" />
            <span>{actor.name}</span>
        </div>
    )
}
