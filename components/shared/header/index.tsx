import Image from 'next/image';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ShoppingCart, UserIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/logo.png"
              alt="Log"
              height={45}
              width={45}
              priority={true}
            />
            <span className="hidden lg:block font-semibold text-2xl ml-2">
              {SITE_NAME}
            </span>
          </Link>
        </div>

        <div className="space-x-2">
          <Button asChild variant="outline">
            <Link href="/cart">
              <ShoppingCart className="w-4 h-4" /> Cart
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/sign-in">
              <UserIcon className="w-4 h-4" /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
