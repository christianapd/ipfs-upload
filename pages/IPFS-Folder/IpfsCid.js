
import { useState } from 'react'
import { create } from 'ipfs-http-client'
import { Box, Heading, Input, Image } from '@chakra-ui/react'

const client = create('https://ipfs.infura.io:5001/api/v0')
export default function IpfsCid() {
  const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(url)
      console.log(added.path)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  return (
    <Box>
      <Box className="App" mb="20px" border="2px solid black" p="20px">
        <Heading>IPFS Example</Heading>
        <Input type="file" onChange={onChange} />
        <Box w="500px" height="400px">
          {
            fileUrl && (
              <Image src={fileUrl} height="400px" />
            )
          }
        </Box>
      </Box>
    </Box>
  )
}