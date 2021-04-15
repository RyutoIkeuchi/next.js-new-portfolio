import { SkillLanguage } from './SkilLanguage'
import styles from '../../styles/Home.module.css'


export const SkillGrid = ({data}) => {
  return (
		<section className={styles.gridStyle}>
			{data.map((language) => (
				<SkillLanguage
					key={language.icon}
					icon={[`${language.iconName}`, `${language.icon}`]}
					color={language.color}
					title={language.title}
				/>
			))}
		</section>
	);
}