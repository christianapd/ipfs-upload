import { Button, Container, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SimpleForm, { FormWithOptions, SimpleFormAll, FormAllWithOptions, SimpleInput, InputWithOptions } from './ React-Indicative-Hooks/index'
import AppIPFS from './IPFS-Folder/index'
import IpfsCid from './IPFS-Folder/IpfsCid'

export function getStaticProps() {
  console.log('[Next.js] Running getStaticProps...');
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 60,
  };
}

export default function Home({ time }) {
  function revalidate() {
    fetch('/api/revalidate')
  }
  return (
    <Container maxW="container.xl" centerContent pb="50px">
      <Heading>{time}</Heading>
      <Button onClick={() => revalidate()}>revalidate</Button>
      <SimpleForm />
      <FormWithOptions />
      <SimpleFormAll />
      <FormAllWithOptions />
      <SimpleInput />
      <InputWithOptions />
      < AppIPFS />
      {/* <IpfsCid/> */}
    </Container>
  )
}
