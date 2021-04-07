import styles from '../../styles/Home.module.css';
import { SkillLanguage } from './SkilLanguage';
import { Languages } from './Languages';

export const SkillGrid = () => {
	return (
		<section className={styles.gridStyle}>
			{Languages.map((language) => (
				<SkillLanguage
					key={language.icon}
					icon={[`${language.iconName}`, `${language.icon}`]}
					color={language.color}
					title={language.title}
				/>
			))}
		</section>
	);
};
