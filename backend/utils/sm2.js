const review = (flashcard, userRating, sureness, userSettings) => {
    // The SM-2 algorithm requires certain values to be adjustable.
    // The ease factor begins at a certain value and decreases based on the user's performance
    let easeFactor = flashcard.easeFactor;
    
    console.log("🚀 ~ file: sm2.js:4 ~ review ~ userSettings:", userSettings)
    const { easyModifier, goodModifier, hardModifier, superhardModifier } = userSettings;
  
    // Update the ease factor
    if (userRating === 'Easy') {
      easeFactor += easyModifier;
    } else if (userRating === 'Good') {
      easeFactor += goodModifier;
    } else if (userRating === 'Hard') {
      easeFactor += hardModifier;
    } else if (userRating === 'Superhard') {
      easeFactor += superhardModifier;
    }
  
    // Make sure the ease factor doesn't fall below a certain threshold
    easeFactor = Math.max(easeFactor, 1.3);
  
    // Update the repetition count
    let repetition = flashcard.repetitions;
    if (userRating === 'Easy' || userRating === 'Good') {
      repetition += 1;
    } else if (userRating === 'Hard' || userRating === 'Superhard') {
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
  
    // Adjust the interval based on how sure the user was of their answer
    // A lower sureness results in a smaller interval
    interval = Math.round(interval * (sureness / 3));
  
    // Calculate the next review date
    const now = new Date();
    const nextReviewDate = calculateNextReviewDate(repetition, easeFactor);

    // Return the results
    return {
      nextReviewDate,
      newEaseFactor: easeFactor,
      sureness
  };
}
  module.exports = { review };
  