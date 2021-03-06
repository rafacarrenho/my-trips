import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                src={image.url}
                alt={place.name}
                key={`photo-${index}`}
                width={100}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlacesTemplate
