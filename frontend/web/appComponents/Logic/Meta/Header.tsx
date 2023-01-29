import { FC } from 'react'
import Head from 'next/head'
import { IHeader } from './Interface/Meta.interface'

const Header: FC<IHeader> = ({description, title_description}) => {
  if (!description) {
    description = 'Bluxe is the ultimate messaging platform'
  }
  if (!title_description) {
    title_description = ''
  } else {
    title_description = '| ' + title_description
  }
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Logo/Logo.png" />
      <title>Bluxe {title_description}</title>
    </Head>
  )
}
export default Header