import styles from '../../styles/Home.module.css'

export const WorksWrapper = (props) => {
  return (
		<article className={styles.worksWrapper}>
      <a href={ props.url} target="_blank">
				<p>
					{props.language}
					<br />
          <strong>{props.title }</strong>
				</p>
			</a>
		</article>
	);
}