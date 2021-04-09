import styles from './Contact.module.css'
import { ContactFontIcon } from './ContactFontIcon';


export const ContactSns = () => {
  return (
		<div className={styles.contactSns}>
			<ContactFontIcon
				url="https://www.instagram.com/ryuto_ma2d/?hl=ja"
				icon="fab"
				iconName="instagram-square"
				color="#F73D6D"
			/>
			<ContactFontIcon
				url="https://twitter.com/home"
				icon="fab"
				iconName="twitter-square"
				color="#1FA1F1"
			/>
			<ContactFontIcon
				url="mailto:ryu.i7133&#64;icloud.com"
				icon="fas"
				iconName="envelope-square"
				color="#0152F6"
			/>
			<ContactFontIcon
				url="https://github.com/RyutoIkeuchi"
				icon="fab"
				iconName="github-square"
				color="#171515"
			/>			
		</div>
	);
}