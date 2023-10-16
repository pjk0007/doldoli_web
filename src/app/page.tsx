import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOME',
  description: 'This is Home Page',
};

export default function Home() {
  metadata.title = 'Test';
  return <main>123</main>;
}
