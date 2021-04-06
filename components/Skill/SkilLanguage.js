import styles from '../../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SkillLanguage = (props) => {
	return (
		<article className={styles.skillLanguage}>
			<div>
				<FontAwesomeIcon
					icon={props.icon}
					color={props.color}
					className={styles.fontIcon}
				/>
			</div>
			<p>{props.title}</p>
		</article>
	);
};
