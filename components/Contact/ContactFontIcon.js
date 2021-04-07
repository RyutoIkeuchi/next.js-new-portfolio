import styles from '../../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ContactFontIcon = (props) => {
  return (
		<a href={props.url} target="_blank">
			<FontAwesomeIcon
        icon={[`${props.icon}`, `${props.iconName}`]}
        className={styles.contactfontIcon}
        color={ props.color}
			/>
		</a>
	);
}