import styles from '../styles/Home.module.css';

export const SectionTitle = (props) => {
	return (
		<div className={styles.sectionTitle}>
      <h2>{props.title}</h2>
      <p>{props.text}
        <br />{props.text2}
        <br />{props.text3}
      </p>
		</div>
	);
};
