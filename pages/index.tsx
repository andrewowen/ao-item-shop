import Link from 'next/link'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <div>
      <p>Hey!</p>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </div>
  )
}

export default Home
