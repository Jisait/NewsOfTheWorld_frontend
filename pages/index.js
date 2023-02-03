import Head from 'next/head'
import HomeFra from '../components/HomeFra';

function Index() {
  return (
    <div>
      <Head>
        <title>News Of The World</title>
        <link rel="icon" href="/icon_News.png" />
      </Head>
      <HomeFra />
    </div>
  );
}

export default Index;
