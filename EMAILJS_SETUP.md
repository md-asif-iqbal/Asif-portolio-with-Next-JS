# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (md.asifiqbal2008@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: Portfolio Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., "user_def456")

## Step 5: Update Contact Component
Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

## Step 6: Test the Form
1. Start your development server
2. Fill out the contact form
3. Submit and check if you receive the email

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Ensure your template variables match the code

## Security Notes
- The public key is safe to use in frontend code
- EmailJS handles the email sending securely
- No backend server required
