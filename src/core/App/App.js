import { Routes, Route, Navigate } from 'react-router-dom'

import { Weather } from '../../screens/Weather/Weather'
import { Main } from '../../screens/Main/Main'

import { Container } from './styled'

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/weather/:id' element={<Weather />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Container>
  )
}
