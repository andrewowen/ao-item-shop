import { FunctionComponent } from 'react'
import Link from 'next/link'

const Nav: FunctionComponent = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
)

export default Nav
