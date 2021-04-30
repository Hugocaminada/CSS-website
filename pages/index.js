import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conrad Soundsystem</title>
        <meta name="description" content="Conrad Soundsystem" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          CONRAD SOUNDSYSTEM
        </h1>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/conrad.jpg"
            alt="picture of Conrad"
            width={500}
            height={500}
          />
        </div>

        <div className={styles.mixcloud}>
          <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fconrad-soundsystem%2Fconrad-soundsystem-clubmusic-in-2020%2F" frameborder="0" />
          <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fooradio%2F020%2F" frameborder="0" />
          <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fconrad-soundsystem%2Fconrad-soundsystem-breaks-vinyl-mix%2F" frameborder="0" />
        </div>

      </main>
      <footer className={styles.footer}>
          <a href="mailto:general@conradsoundsystem.com">general@conradsoundsystem.com</a>
          <p>Hugo Eno and David Lieffering</p>
      </footer>
    </div>
  )
}
