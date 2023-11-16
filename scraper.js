import gplay from "google-play-scraper";
import fss from "fs";

// will return 3000 reviews
// on a single call
gplay.reviews({
  appId: 'my.com.tngdigital.ewallet',
  sort: gplay.sort.HELPFULNESS,
  num: 3000
}).then(
  (reviews) => {
    // Convert reviews to JSON string for logging
    const reviewsString = JSON.stringify(reviews, null, 2);

    // Write the reviews to the log file
    fss.appendFile('log.txt', reviewsString, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      } else {
        console.log('Reviews logged to', 'log.txt');
      }
    });
  },
  (error) => {
    console.error('Error fetching reviews:', error);
  }
);
