import { Button } from '@mantine/core';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Button className="text-slate-600 bg-red-500">Hello World!</Button>
      <div className="text-green-500 mt-6">Hello</div>
    </div>
  );
};

export default Home;
