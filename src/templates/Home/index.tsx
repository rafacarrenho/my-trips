import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })
export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        canonical="https://rcarrenho-my-trips.vercel.app/"
        openGraph={{
          url: 'https://rcarrenho-my-trips.vercel.app/',
          description:
            'A simple project to show in a map the places that i went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://rcarrenho-my-trips.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
