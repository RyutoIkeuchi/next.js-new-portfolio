import styles from './Career.module.css';
import { CareerWrapper } from './CareerWrapper';

export const CareerContent = () => {
	return (
		<div className={styles.careerContent}>
			<CareerWrapper
				title="周りが田んぼだらけの環境で育つ in 岡山"
				text1="小さい頃はなりふり構わず騒いでました"
				text2="勉強は全くせず、今現在後悔しています。"
				text3="スポーツは剣道を始めて、泣きながら稽古に励んでいました"
				url="/images/momotarou.jpg"
				alt="桃太郎"
			/>
			<CareerWrapper
				title="地元の工業高校に進学 in 岡山"
				text1="本格的にものづくりに携わりたいと思い、工業高校に進学。"
				text2="部活も学業も両方に力を入れ、それなりの結果を残す。"
				text3="ゲームや漫画にハマって若干インドアになりました。"
				url="/images/school.jpg"
				alt="高校の写真"
			/>
			<CareerWrapper
				title="マツダ株式会社に入社 in 広島"
				text1="お客様に直接届くものをつくりたいと思い、入社する。"
				text2="不規則勤務に慣れず、かなり生活が乱される。"
				text3="それでも社内で意欲的に活動を起こし、評価される。"
				url="/images/factory.jpg"
				alt="整備士の写真"
			/>
			<CareerWrapper
				title="エンジニアを目指す in 広島"
				text1="よりたくさんの人に影響を与えるサービスを"
				text2="つくりたいと思い、2020年6月より勉強を始める。"
				text3="主にフロントエンドを学習し好きな言語はJavascriptです。"
				url="/images/computer.jpg"
				alt="パソコンの写真"
			/>
		</div>
	);
};
