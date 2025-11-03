# Stripe Payment Setup Instructions

## Overview
Your Alpha Trading Pro website now has a dedicated packages page with 4 mentorship tiers. Each package needs to be connected to Stripe for payment processing.

## Steps to Configure Stripe Payment Links

### 1. Create Payment Links in Stripe Dashboard

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Products** → **Add Product**
3. Create a product for each mentorship package:

#### Package 1: Stocks Mentorship - $995
- **Product Name**: Stocks Mentorship
- **Price**: $995 USD (one-time payment)
- **Description**: Entry-Level Membership focusing on Core Technical Analysis & Small-Cap Stocks

#### Package 2: Stocks + Options Mentorship - $1,995
- **Product Name**: Stocks + Options Mentorship
- **Price**: $1,995 USD (one-time payment)
- **Description**: Intermediate Membership with Stocks + Options Strategies

#### Package 3: Options + Futures Mentorship - $2,995
- **Product Name**: Options + Futures Mentorship
- **Price**: $2,995 USD (one-time payment)
- **Description**: Advanced Membership with Multi-Asset Execution

#### Package 4: Elite - $3,995
- **Product Name**: Elite Mentorship
- **Price**: $3,995 USD (one-time payment)
- **Description**: Flagship Mentorship with All-In Access

### 2. Generate Payment Links

1. For each product, click **Create payment link**
2. Configure the payment link settings:
   - Enable **Collect customer addresses** (optional but recommended)
   - Add any custom fields you need
   - Set up success/cancel redirect URLs if desired
3. Copy the generated payment link

### 3. Update Your Website

Open `/pages/packages.js` and replace the placeholder Stripe links:

```javascript
const packages = [
  {
    id: 1,
    name: 'STOCKS MENTORSHIP',
    price: '$995',
    stripeLink: 'https://buy.stripe.com/YOUR_ACTUAL_LINK_1', // Replace this
    // ... rest of config
  },
  {
    id: 2,
    name: 'STOCKS + OPTIONS MENTORSHIP',
    price: '$1,995',
    stripeLink: 'https://buy.stripe.com/YOUR_ACTUAL_LINK_2', // Replace this
    // ... rest of config
  },
  {
    id: 3,
    name: 'OPTIONS + FUTURES MENTORSHIP',
    price: '$2,995',
    stripeLink: 'https://buy.stripe.com/YOUR_ACTUAL_LINK_3', // Replace this
    // ... rest of config
  },
  {
    id: 4,
    name: 'ELITE',
    price: '$3,995',
    stripeLink: 'https://buy.stripe.com/YOUR_ACTUAL_LINK_4', // Replace this
    // ... rest of config
  }
];
```

### 4. Test Your Payment Flow

1. Run your development server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Click **Join Now** button
4. Verify you're redirected to `/packages`
5. Test each package's payment button
6. Complete a test transaction using Stripe's test card numbers:
   - Test card: `4242 4242 4242 4242`
   - Use any future expiry date, any 3-digit CVC, and any 5-digit ZIP code

### 5. Optional: Add Trading Bot Subscription

If you want to add the optional trading bot subscription ($199/month), create an additional Stripe product:

- **Product Name**: Trading Bot Access
- **Price**: $199 USD/month (recurring subscription)
- **Description**: $5000 Valued Technical Analysis Algo Bot

You can add this as an upsell or separate product on your website.

## Need Help?

- [Stripe Documentation](https://stripe.com/docs/payments/payment-links)
- [Stripe Support](https://support.stripe.com/)

## Current Status

✅ Packages page created
✅ Navigation updated to route to packages
⏳ Stripe payment links need to be configured (see steps above)
⏳ Test payment flow after configuration
