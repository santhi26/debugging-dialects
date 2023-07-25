import React, { useContext } from 'react';
import { UserContext } from '../../contexts';
import GetUserFlashcards from '../../components/GetUserFlashcards';

export default function UserFlashcardReview() {
  const { userID } = useContext(UserContext);

  return (
    <>
      <h1>fluentPal</h1>
      <em>Review flashcards</em>
      <GetUserFlashcards userId={userID} />
    </>
  )
};
