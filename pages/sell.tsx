import Link from 'next/link'
import { ReactElement } from 'react'

const Sell = (): ReactElement => {
  return (
    <div>
      <p>Sell!</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Sell
