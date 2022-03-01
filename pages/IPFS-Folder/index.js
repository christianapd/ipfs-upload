import { useState } from 'react'
import { create, CID } from 'ipfs-http-client'
import { Box, Heading, Input, Image, Link } from '@chakra-ui/react'
import nftData from '../api/nftData.json'





const client = create('https://ipfs.infura.io:5001/api/v0')

export default function AppIPFS(){
  
  const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://cloudflare-ipfs.com/ipfs/${added.path}`
      updateFileUrl(url)
      console.log(added)
      console.log(added.path)
      console.log(url)
      
      var myObj = {
        "hash" : added.path,    //your artist variable
        "image" : url   //your title variable
    };
    //push the object to your array
    
    nftData.push( myObj );
    console.log(nftData)
    } catch (error) {
      console.log('Error uploading file: ', error)
     
    }
  }

  const [fileUrlVid, updateFileUrlVid] = useState(``)
  async function onChangeVid(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://cloudflare-ipfs.com/ipfs/${added.path}`
      updateFileUrlVid(url)
      console.log(added.path)
      console.log(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
      
    }
  }

  const [fileUrlAudio, updateFileUrlAudio] = useState(``)
  async function onChangeAudio(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://cloudflare-ipfs.com/ipfs/${added.path}`
      updateFileUrlAudio(url)
      console.log(added.path)
      console.log(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  const [fileUrlJson, updateFileUrlJson] = useState(``)
  async function onChangeJson(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://cloudflare-ipfs.com/ipfs/${added.path}`
      updateFileUrlJson(url)
      console.log(added.path)
      console.log(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  return (
    <Box>
      <Box className="App" mb="20px" border="2px solid black" p="20px" align="center">
        <Heading>IPFS Example Image</Heading>
        <Input type="file" onChange={onChange} />
        <Box w="500px" height="400px">
          {
            fileUrl && (
              <Image src={fileUrl} height="400px" />
            )
          }
        </Box>
      </Box>
      <Box className="App" mb="20px" border="2px solid black" p="20px" align="center">
        <Heading>IPFS Example Video</Heading>
        <Input type="file" onChange={onChangeVid} />
        <Box w="500px" height="500px" align="center">
          {
            fileUrlVid && (
              <video height="500px"  controls >
                <source src={fileUrl} type="video/mp4" />
                <source src={fileUrl} type="video/ogg" />
              </video>
            )
          }
        </Box>
      </Box>
      <Box className="App" mb="20px" border="2px solid black" p="20px" align="center">
        <Heading>IPFS Example Audio</Heading>
        <Input type="file" onChange={onChangeAudio} />
        <Box w="500px" height="400px">
          {
            fileUrlAudio && (
              <audio controls autoPlay>
              <source src={fileUrlAudio} type="audio/ogg"/>
              <source src={fileUrlAudio} type="audio/mpeg"/>
            </audio>
            )
          }
        </Box>
      </Box>
      <Box className="App" mb="20px" border="2px solid black" p="20px" align="center">
        <Heading>IPFS Example Json</Heading>
        <Input type="file" onChange={onChangeJson} />
        <Box w="500px" height="400px">
          {
            fileUrlJson && (
              <Link as='a' target="_blank" href={fileUrlJson}>uploaded Json files</Link>
            )
          }
        </Box>
      </Box>


    </Box>
  )
}