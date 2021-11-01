import Layout from '@components/Layout/Layout';
import FullPageMenu from '@components/FullPageMenu/FullPageMenu';
import Hero from 'src/sections/Home/Hero/Hero';

export default function Home() {
  return (
    <Layout>
      <FullPageMenu />
      <Hero />
    </Layout>
  );
}
