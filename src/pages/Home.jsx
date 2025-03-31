import { useAuth } from '../context'

export function Home() {
  const auth = useAuth()

  return (
    <h1>
      Добро пожаловать
      <span style={{ color: '#65e665' }}>
        {' '}
        {auth.user && auth.user.email}
      </span>{' '}
      на страничку о вселенной Рика и Морти!
    </h1>
  )
}
