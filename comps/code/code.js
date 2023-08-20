import Image from 'next/image';
// import Lightbulb from '../../public/lighbulb.gif'

import styles from './Code.module.css'

const CodeAspirant = () => {
	return (
			
		<div className={styles.video_container}>
			<Image src="/../public/c.gif" width={300} height={400} alt="CodeAspirant" />
			{/* <img src={Lightbulb} className={styles.video} width={83} height={80} alt={"gif"} /> */}
		</div>
	)
}

export default CodeAspirant