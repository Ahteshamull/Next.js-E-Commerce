import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function pag() {
  return (
    <Container>
      <h2 className='text-3xl font-semibold bg-lightOrange p-2'>This is an online platform</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam adipisci dolorem modi, iusto cumque fugit? Architecto, maxime? Eligendi, consequuntur?</p>
      <Button size="lg">Contact</Button>
      
    </Container>
  )
}

