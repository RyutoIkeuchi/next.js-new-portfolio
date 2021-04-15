import styles from './Profile.module.css'
import { Images } from './Images';

export const Profile = () => {
  return (
		<article className={styles.profileContent}>
			<div className={styles.profileContainer}>
				<h3 className={styles.profileName}>池内隆人</h3>
				<p className={styles.profileJob}>~ Web Engineer ~</p>
				<div className={styles.profileText}>
					<p>趣味：お酒、古着、野球観戦、ドライブ</p>
					<p>現在：広島県に在住の21歳</p>
					<p>好きな言語：Javascript</p>
					<p>直近の目標：オープンカーを買う</p>
				</div>
			</div>
			<Images url="/images/ryuto.png" alt='alt="Picture of the author"' />
		</article>
	);
}