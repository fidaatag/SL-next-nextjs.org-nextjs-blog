import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';;
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className={utilStyles.headingMd}>
          <p>hello, I'm Fidaa. Now i'm a communications student and i want to be software enginer who can remote work </p>
          <Link href="/posts/first-post">first post</Link>
        </section>
      </div>
    </Layout>
  )
}
