import Image from 'next/image';
import { contact } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Shoot me an email:{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        {contact.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/github.svg"
              width={20}
              height={20}
              alt="Github icon"
            />
          </a>
        )}
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn icon"
            />
          </a>
        )}
        {contact.facebook && (
          <a
            href={contact.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/facebook.svg"
              width={20}
              height={20}
              alt="facebook icon"
            />
          </a>
        )}
        {contact.instagram && (
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/instagram.svg"
              width={20}
              height={20}
              alt="instagram icon"
            />
          </a>
        )}
        {contact.whatsapp && (
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/whatsapp.svg"
              width={20}
              height={20}
              alt="whatsapp icon"
            />
          </a>
        )}
        {contact.twitter && (
          <a
            href={contact.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/twitter.svg"
              width={20}
              height={20}
              alt="twitter icon"
            />
          </a>
        )}
      </div>
    </div>
  );
}
