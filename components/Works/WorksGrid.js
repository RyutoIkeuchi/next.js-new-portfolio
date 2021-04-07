import styles from '../../styles/Home.module.css';
import {WorksWrapper} from './WorksWrapper'

export const WorksGrid = () => {
  return (
		<section className={styles.gridStyle}>
			<WorksWrapper
				url="https://ryutoikeuchi.github.io/isara-/"
				language="HTML&CSS,jQuery"
				title="isara模写"
			/>
			<WorksWrapper
				url="https://ryutoikeuchi.github.io/vuejs.todoapp/"
				language="Vue.js"
				title="Todoリスト"
			/>
			<WorksWrapper
				url="https://gifted-cori-a4da38.netlify.app"
				language="React.js"
				title="写真検索アプリ"
			/>
			<WorksWrapper
				url="https://next-js-new-portfolio.vercel.app/"
				language="Next.js"
				title="自己紹介サイト"
			/>
			<WorksWrapper url="#" language="Comming" title="soon" />
			<WorksWrapper url="#" language="Comming" title="soon" />
		</section>
	);
}