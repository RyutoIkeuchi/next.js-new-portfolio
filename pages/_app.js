import '../styles/globals.css';
import 'modern-css-reset/dist/reset.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5,faCss3Alt,faReact,faVuejs,faJsSquare,faPython,faLinux } from '@fortawesome/free-brands-svg-icons';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';

library.add(faHtml5,faCss3Alt,faReact,faVuejs,faJsSquare,faPython,faLinux, faPencilRuler);

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
