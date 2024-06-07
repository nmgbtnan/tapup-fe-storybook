import { Button } from '@/components/ui/button';
import Error404Logo from '././Error404Logo';
import Link from 'next/link';

export default function NotFoundMessage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6">
      <Error404Logo />
      <div className="mt-4">
        <Button className="bg-green-600 text-white">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
