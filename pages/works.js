import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Works() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div className={styles.sectionTitle}>
					<h2>Works</h2>
					<p>
						クラウドソーシングを活用してこれまでに４つの案件を担当してきました。
						<br />
						その他にもReactを中心にアプリ開発をしています。
						<br />
						サーバーサイド言語を用いたアプリを作るのが現在の目標です。
					</p>
				</div>
				<section className={styles.skillGrid}>
					<article className={styles.worksWrapper}>
						<a href="https://ryutoikeuchi.github.io/isara-/" target="_blank">
							<p>
								HTML&CSS,jQuery
								<br />
								<strong>isara模写</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a
							href="https://ryutoikeuchi.github.io/vuejs.todoapp/"
							target="_blank"
						>
							<p>
								Vue.js
								<br />
								<strong>Todoリスト</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="https://gifted-cori-a4da38.netlify.app" target="_blank">
							<p>
								React.js
								<br />
								<strong>写真検索アプリ</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="#" target="_blank">
							<p>
								comming
								<br />
								<strong>soon</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="#" target="_blank">
							<p>
								comming
								<br />
								<strong>soon</strong>
							</p>
						</a>
					</article>
					<article className={styles.worksWrapper}>
						<a href="#" target="_blank">
							<p>
								comming
								<br />
								<strong>soon</strong>
							</p>
						</a>
					</article>
				</section>
			</main>
			<Footer />
		</div>
	);
}
