import styles from '../styles/Home.module.css';
import { Header } from '../components/Header'

export default function Career() {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div className={styles.sectionTitle}>
					<h2>Career</h2>
					<p>岡山 ~ 広島 ~ 東京？？</p>
				</div>
				<section className={styles.careerContainer}>
					<div className={styles.careerBorder}></div>
					<div className={styles.careerContent}>
						<article className={styles.careerWrapper}>
							<div className={styles.careerName}>
								<h4>周りが田んぼだらけの環境で育つ in 岡山</h4>
								<p>
									小さい頃はとにかく喋り倒していました。
									<br />
									勉強は全くしていませんでした。スポーツは剣道を始めて
									<br />
									よく泣きながら稽古をしていました。
								</p>
							</div>
							<div
								className={`${styles.careerImage} ${styles.careerImage1}`}
							></div>
						</article>
						<article className={styles.careerWrapper}>
							<div className={styles.careerName}>
								<h4>地元の工業高校に進学 in 岡山</h4>
								<p>
									本格的にものづくりに携わりたいと思い、工業高校に進学。
									<br />
									部活も学業も両方に力を入れ、それなりの結果を残す。
									<br />
									ゲームや漫画にハマって若干インドアになりました。
								</p>
							</div>
							<div
								className={`${styles.careerImage} ${styles.careerImage2}`}
							></div>
						</article>
						<article className={styles.careerWrapper}>
							<div className={styles.careerName}>
								<h4>マツダ株式会社に入社 in 広島</h4>
								<p>
									お客様に直接届くものをつくりたいと思い、入社する。
									<br />
									不規則勤務に慣れず、かなり生活が乱される。
									<br />
									それでも社内で意欲的に活動を起こし、評価される。
									<br />
									私生活では酒と古着にハマる。
								</p>
							</div>
							<div
								className={`${styles.careerImage} ${styles.careerImage3}`}
							></div>
						</article>
						<article className={styles.careerWrapper}>
							<div className={styles.careerName}>
								<h4>エンジニアを目指す in 広島</h4>
								<p>
									よりたくさんの人に影響を与えるサービスを
									<br />
									つくりたいと思い、2020年6月より勉強を始める。
									<br />
									主にフロントエンドを学習し好きな言語はJavascriptです。
									<br />
									現在はTypescript,Python勉強をしています
								</p>
							</div>
							<div
								className={`${styles.careerImage} ${styles.careerImage4}`}
							></div>
						</article>
					</div>
				</section>
			</main>
		</div>
	);
};
