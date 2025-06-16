# Google Analytics 4 Setup Guide for Revoo

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account name (e.g., "Revoo")
4. Choose what you want to measure: "Web"
5. Enter your website details:
   - Website name: "Revoo Landing Page"
   - Website URL: your domain
   - Industry: "Technology" or "Other"
   - Time zone: Your location

## Step 2: Get Your Measurement ID

1. After creating the property, you'll see a "Measurement ID" that looks like: `G-XXXXXXXXXX`
2. Copy this ID

## Step 3: Update Your Code

1. Open `components/google-analytics.tsx`
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID
3. Deploy your updated site

## Step 4: Verify Tracking Works

1. Visit your website
2. In Google Analytics, go to "Reports" > "Realtime"
3. You should see your visit appear within a few minutes

## Key Metrics to Monitor

### Traffic Metrics
- **Users**: Unique visitors to your site
- **Sessions**: Number of visits
- **Page Views**: Total pages viewed
- **Session Duration**: How long people stay
- **Bounce Rate**: % who leave immediately

### Conversion Metrics (Custom Events)
- **form_submission**: Tracks all form completions
- **button_click**: Tracks important button clicks
- **language_change**: Tracks language preferences

### Geographic Data
- **Countries**: Where your users are located
- **Cities**: Local market concentration
- **Languages**: User language preferences

## Creating Custom Reports

1. Go to "Reports" > "Engagement" > "Events"
2. Look for your custom events:
   - `form_submission`
   - `button_click` 
   - `language_change`

## Investor-Ready Metrics Dashboard

Create these key reports:
1. **Weekly Active Users** trend
2. **Form Conversion Rate** (submissions/visitors)
3. **Geographic Distribution** of users
4. **Traffic Sources** (organic, social, direct)
5. **Mobile vs Desktop** usage

## Privacy Compliance

The current setup is privacy-friendly and GDPR compliant:
- No personal data is collected without consent
- Analytics data is anonymized
- Users can opt-out via browser settings
