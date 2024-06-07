
import { Button } from '@/components/ui/button';
import NotFoundLogo from './NotFoundLogo';
import Link from 'next/link';

export default function NotFoundMessage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6">
      <NotFoundLogo />
      <div className="mt-4">
        <Button className="bg-green-600 text-white">
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
}
