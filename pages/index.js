import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TEJI - Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="TEJI - Privacy Policy" />
        <p className="description">
          We do not collect any of your data.
          The data provided is processed to provide the results to the users.
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
