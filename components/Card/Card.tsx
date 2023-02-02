import { ICard } from "./Card.props";
import styles from "./Card.module.css";
import cn from 'classnames';

export const Card = ({color= 'white', children, className, ...props}: ICard) => {
    
    return (
        <div className={cn(styles.card, className, {
            [styles.cream]: color === 'cream'
        })} {...props}>
            {children}
        </div>
    )
}