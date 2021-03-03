import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })
export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Campinas',
          slug: 'campinas',
          location: {
            latitude: -22.9064,
            longitute: -47.0616
          }
        }
      ]}
    />
  )
}
