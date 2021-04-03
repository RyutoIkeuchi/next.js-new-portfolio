import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '../components/Footer';
import Head from 'next/head'

export default function Skill() {
	return (
		<div className={styles.container}>
			<Head>
				<title>ryuto's portfoliosite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={styles.main}>
				<div className={styles.sectionTitle}>
					<h2>Skill</h2>
					<p>
						主にフロントエンドを中心に学習し、Web制作・Web開発の両方を経験してきました。
						<br />
						フロントはjavascriptをメインにReact(Next.js),VueでサーバーサイドはPython(Django),
						<br />
						他にもGitやLinux,Adobe,ネットワークといったプログラミング以外の学習も積極的にしています
					</p>
				</div>
				<section className={styles.skillGrid}>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'html5']}
								className={styles.fontIcon}
								color="#EC5D25"
							/>
						</div>
						<p>HTML</p>
					</article>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'css3-alt']}
								className={styles.fontIcon}
								color="#2965F0"
							/>
						</div>
						<p>CSS</p>
					</article>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fas', 'pencil-ruler']}
								className={styles.fontIcon}
								color="#F85FEE"
							/>
						</div>
						<p>Design</p>
					</article>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'react']}
								className={styles.fontIcon}
								color="#61DBFB"
							/>
						</div>
						<p>React.js</p>
					</article>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'vuejs']}
								className={styles.fontIcon}
								color="#3EB37F"
							/>
						</div>
						<p>Vue.js</p>
					</article>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'js-square']}
								className={styles.fontIcon}
								color="#FDD83B"
							/>
						</div>
						<p>javascript</p>
					</article>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'python']}
								className={styles.fontIcon}
								color="#3676A8"
							/>
						</div>
						<p>Python</p>
					</article>
					<article className={styles.skillLanguage}>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'linux']}
								className={styles.fontIcon}
								color="#363636"
							/>
						</div>
						<p>Linux</p>
					</article>
				</section>
			</main>
			<Footer />
		</div>
	);
}
