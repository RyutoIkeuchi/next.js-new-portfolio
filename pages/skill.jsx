import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import { SectionTitle } from '../components/SectionTitle';
import { Languages } from '../components/Skill/Languages';
import { SkillGrid } from '../components/Skill/SkilGrid';


export default function Skill({data}) {
	return (
		<div className={styles.container}>
			<Head>
				<title>ryuto's portfoliosite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={styles.main}>
				<SectionTitle
					title="Skill"
					text="主にフロントエンドを中心に学習し、Web制作・Web開発の両方を経験してきました。"
					text2="フロントはJavasctiptをメインにReact(Next.js)を扱い、サーバーサイドはPython(Django)を仕様"
					text3="他にもGitやLinux,Adobe,ネットワークといったプログラミング以外の学習も積極的にしています。"
				/>
				<SkillGrid data={ data}/>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	 const data = Languages
	return {
		props: {
			data,
		},
	};
}