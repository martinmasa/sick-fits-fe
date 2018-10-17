import Link from 'next/link';

const Home = (props) => {
  return (
    <div>
      <p>Home</p>
      <Link href="/sell">Sell</Link>
    </div>
  );
};

export default Home;
