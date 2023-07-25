const review = (flashcard, reviewResult) => {
  let easeFactor = 2.5; // The fixed ease factor value

  // Update the ease factor based on the user's rating
  if (reviewResult === 'Easy') {
    easeFactor += 0.1;
  } else if (reviewResult === 'Good') {
    easeFactor += 0;
  } else if (reviewResult === 'Hard') {
    easeFactor -= 0.2;
  } else if (reviewResult === 'Wrong') {
    easeFactor -= 0.5;
  }

  // Make sure the ease factor doesn't fall below a certain threshold
  easeFactor = Math.max(easeFactor, 1.3);

  // Update the repetition count
  let repetition = flashcard.repetitions;
  if (reviewResult === 'Easy' || reviewResult === 'Good') {
    repetition += 1;
  } else if (reviewResult === 'Hard' || reviewResult === 'Wrong') {
    repetition = 0;
  }

  // Calculate the next review interval
  let interval;
  if (repetition === 1) {
    interval = 1;
  } else if (repetition === 2) {
    interval = 6;
  } else {
    interval = Math.round((repetition - 1) * easeFactor);
  }

  // Calculate the next review date
  const nextReviewDate = calculateNextReviewDate(interval);

  // Return the results
  return {
    nextReviewDate,
    newEaseFactor: easeFactor,
    repetition
  };
}

const calculateNextReviewDate = (interval) => {
  const now = new Date();
  return new Date(now.setMinutes(now.getMinutes() + interval));
}

module.exports = { review };
