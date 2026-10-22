import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './44-testing.jsx'

describe('Counter', () => {
  it('increments on click', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /increment/i }))
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})
