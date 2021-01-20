//production keys here
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.eny.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  GOLD_PRICE_ID: process.env.GOLD_PRICE_ID, // havent added to heroku yet
  SILVER_PRICE_ID: process.env.SILVER_PRICE_ID, // havent added to heroku yet
  BRONZE_PRICE_ID: process.env.BRONZE_PRICE_ID, // havent added to heroku yet
  stripeWebhookSecret: process.env.stripeWebhookSecret,
};
