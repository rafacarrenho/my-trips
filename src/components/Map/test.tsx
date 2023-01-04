import Map from '.'
import { render, screen } from '@testing-library/react'

const mockPlaces = [
  {
    id: '1',
    name: 'Campinas',
    slug: 'campinas',
    location: {
      latitude: 0,
      longitude: 0
    }
  },
  {
    id: '2',
    name: 'Sudao',
    slug: 'sudao',
    location: {
      latitude: 300,
      longitude: 152
    }
  }
]

jest.mock('next/router', () => require('next-router-mock'))

describe('<Map />', () => {
  it('should rende without any marker', () => {
    const { container } = render(<Map />)

    const marker = container.querySelector('.leaflet-marker-icon')

    expect(marker).not.toBeInTheDocument()
  })

  it('should render with marker in correct place', () => {
    render(<Map places={mockPlaces} />)
    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/sudao/i)).toBeInTheDocument()
  })
})
