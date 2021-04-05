import styles from '../../styles/Home.module.css';

export const CareerName = (props) => {
	return (
		<div className={styles.careerName}>
			<h4>{props.title}</h4>
			<p>
				{props.text1}
				<br />
				{props.text2}
				<br />
				{props.text3}
			</p>
		</div>
	);
};
