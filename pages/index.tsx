import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Button, message } from 'antd'

export default function Home({ }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {

  const info = () => {
    message.info('This is a normal message');
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello World</p>
        <p><Button type="primary" onClick={info}>Ant design Test</Button></p>
        <p>
          <Link href={`/audio_chat`}>
            <Button type="primary">Audio Chat</Button>
          </Link>
        </p>
        <p>
          <Link href={`/chat_room`}>
            <Button type="primary">Chat Room</Button>
          </Link>
        </p>
        <p>
          <Link href={`/login`}>
            <Button type="primary">Go to login page</Button>
          </Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <Link href="https://nextjs.org/learn" passHref>our Next.js tutorial</Link>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}