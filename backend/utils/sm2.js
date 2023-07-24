const review = (flashcard, reviewResult) => {
  let easeFactor = flashcard.easeFactor; // The initial ease factor value

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
let repetition = flashcard.repetitions + 1; // Increment the repetition count


// Calculate the next review interval
let interval;
if (repetition === 1) {
  interval = 1;
} else if (repetition === 2) {
  interval = 6;
} else {
  interval = Math.round((repetition - 1) * easeFactor);
  console.log(`Calculated interval: ${interval}`); // Log the calculated interval value
}

console.log(`Ease factor: ${easeFactor}`); // Log the ease factor


  // Calculate the next review date
  const nextReviewDate = calculateNextReviewDate(interval);
  console.log("🚀 ~ file: sm2.js:38 ~ review ~ nextReviewDate:", typeof nextReviewDate)
  console.log("🚀 ~ file: sm2.js:38 ~ review ~ nextReviewDate:", nextReviewDate)

  // Return the results
  return {
    nextReviewDate,
    newEaseFactor: easeFactor,
    repetition
  };
}

const calculateNextReviewDate = (interval) => {
  const now = new Date();
  console.log(`Current date: ${now}`); // Log the current date
  console.log(`Interval: ${interval}`); // Log the interval
  
  const newMinutes = now.getMinutes() + interval;
  console.log(`New minutes: ${newMinutes}`); // Log the new minutes value

  const nextReviewDate = new Date(now.setMinutes(newMinutes));

  console.log(`Next review date: ${nextReviewDate}`); // Log the calculated next review date
  return nextReviewDate;
}


module.exports = { review };
