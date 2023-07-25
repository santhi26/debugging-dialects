import React from 'react'
import {FlashCard} from '../'

export default function FlashCardList({flashCards}) {
    console.log(flashCards)
    return (
    <>
    
    {flashCards.map(c => <FlashCard key={c.flashcard_id} answer={c.back} question={c.front} />)}
    </>
  )
}

