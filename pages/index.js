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

        {/* <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/conrad.jpg"
            alt="picture of Conrad"
            width={500}
            height={500}
          />
        </div> */}

        <div className={styles.youtube}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PgLuOULqQhg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className={styles.mixcloud}>
          {/* <iframe width="100%" height="115" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/983622586%3Fsecret_token%3Ds-L27yo9oFBto&color=%236c6c6c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}
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
