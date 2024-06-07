'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function ComingSoon() {
  const pathname = usePathname()

  // Ensure the displayed image dynamically updates with each path change to indicate navigation between different sections.
  const dynamicImg = () => {
    switch (pathname) {
      case '/about':
        return './ui-design-25.svg';
      case '/testimonials':
        return './startup-2-54.svg';
      case '/activate':
        return './coding-3-75.svg';
      default:
        return './ui-design-25.svg';
    }
  };

  return (
    <div className="flex flex-col items-center  space-y-4">
      <img src={dynamicImg()} width={300} />
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          Coming Soon!
        </h1>
        <span className="lg:text-3xl text-xl md:text-2xl font-bold">
          We&apos;re working hard on something awesome. Stay tuned!
        </span>
        <p className="text-base md:text-lg">
          In the meantime, feel free to explore other cool features of our site.
        </p>
      </div>

      <Link
        href={'/'}
        className="bg-custom-green text-white px-8 py-2 font-bold rounded-md hover:bg-custom-green/90"
      >
        Explore More
      </Link>
    </div>
  );
}
