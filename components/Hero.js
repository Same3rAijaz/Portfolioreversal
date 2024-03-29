import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.jpeg"
            layout="fill"
            objectFit="contain"
            alt="LeBron"
          />
        </div>
        <Image
          src="/static/icons/sun.svg"
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
      {/* <Link href='/static/sameers_cv.pdf' download> */}
      <a href='/static/sameers_cv.pdf' target="_blank" className='my-2' download>
        <button className={(theme == 'light' ? "text-dark" : "text-light")}>
          Download Resume!!
        </button>
      </a>
      {/* </Link> */}
    </div>
  );
}