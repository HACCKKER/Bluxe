import { FC } from 'react'
import Head from 'next/head'
import { IHeader } from './Interface/Meta.interface'

const Header: FC<IHeader> = ({title, description}) => {
  if (!title) {
    title = 'Bluxe'
  }
  if (!description) {
    description = 'Bluxe is the ultimate messaging platform'
  }
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}
export default Header