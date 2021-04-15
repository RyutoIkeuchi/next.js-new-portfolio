import styles from './Contact.module.css';
import { ContactSns } from './ContactSns';
import { ContactUrl } from './ContactUrl';

export const ContactPage = () => {
	return (
		<section className={styles.contactPage}>
			<ContactSns />
			<ContactUrl />
		</section>
	);
};
