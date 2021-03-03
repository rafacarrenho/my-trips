import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should rende without any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })
  it('should render with marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Campinas',
      slug: 'campinas',
      location: {
        latitude: 0,
        longitute: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Sudao',
      slug: 'sudao',
      location: {
        latitude: 300,
        longitute: 152
      }
    }
    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/sudao/i)).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })
})
