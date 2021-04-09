import styles from './Contact.module.css'

export const ContactUrl = () => {
  return (
		<div className={styles.contactUrl}>
			<p>
				wantedly:{' '}
				<a href="https://www.wantedly.com/id/ryuto_ikeuchi" target="_blank">
					https://www.wantedly.com/id/ryuto_ikeuchi
				</a>
			</p>
			<p>
				Qiita:{' '}
				<a href="https://qiita.com/ryuto-ikeuchi" target="_blank">
					https://qiita.com/ryuto-ikeuchi
				</a>
			</p>
		</div>
	);
}