import { Level } from "../../helpers/imc"
import styles from "./GridItem.module.css"
import downImage from "../../asserts/down.png"
import upImage from "../../asserts/up.png"

type Props = {
    item: Level
}

export function GridItem({ item }: Props) {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up'? upImage : downImage} alt="" width="30px"/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                <>
                    Imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}