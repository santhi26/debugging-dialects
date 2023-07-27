const review = (flashcard, reviewResult) => {
  let easeFactor = flashcard.easeFactor;

  // Adjust the ease factor based on the user's rating
  switch (reviewResult) {
    case 'Easy':
      easeFactor += 0.1;
      break;
    case 'Good':
      easeFactor += 0;
      break;
    case 'Hard':
      easeFactor -= 0.15;  // Adjusted for language learning
      break;
    case 'Wrong':
      easeFactor -= 0.3;   // Adjusted for language learning
      break;
    default:
      break;
  }

  // Ensure the ease factor doesn't fall below a certain threshold
  easeFactor = Math.max(easeFactor, 1.3);

  // Increment the repetition count
  let repetition = flashcard.repetitions + 1;

  // Calculate the next review interval in minutes
  let interval;
  if (repetition === 1) {
    switch (reviewResult) {
      case 'Easy':
        interval = 24 * 60; // 1 day
        break;
      case 'Good':
        interval = 15; // 15 minutes
        break;
      case 'Hard':
        interval = 5; // 5 minutes
        break;
      case 'Wrong':
        interval = 1; // 1 minute
        break;
      default:
        break;
    }
  } else if (repetition === 2) {
    interval = 6 * 24 * 60; // 6 days
  } else {
    interval = Math.min(Math.round((repetition - 1) * easeFactor * 24 * 60), 365 * 24 * 60); // Max interval of a year
  }

  // Calculate the next review date
  const nextReviewDate = calculateNextReviewDate(interval);

  return {
    nextReviewDate,
    newEaseFactor: easeFactor,
    repetition
  };
}

const calculateNextReviewDate = (interval) => {
  const now = new Date();
  const nextReviewDate = new Date();

  // If interval is more than a day, add days else add minutes
  if (interval >= 24 * 60) {
    nextReviewDate.setDate(now.getDate() + Math.round(interval / (24 * 60)));
  } else {
    nextReviewDate.setMinutes(now.getMinutes() + interval);
  }

  return nextReviewDate;
}

module.exports = { review };
