# EmailJS Troubleshooting Guide

## Current Issue: "Failed to send message"

The error you're experiencing is likely due to incomplete EmailJS configuration. Here's how to fix it:

## 🔍 **Diagnosis**

Your current configuration has:
- ✅ Service ID: `service_r7cb437` (looks correct)
- ❌ Template ID: `template_0123456789` (this is a placeholder)
- ✅ Public Key: `auuV7MB4LFzmg-azp` (looks correct)

## 🛠️ **Solution Steps**

### Step 1: Complete EmailJS Setup

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Create Email Template**:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```html
Subject: Portfolio Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

3. **Get Your Template ID**:
   - After creating the template, copy the Template ID
   - It should look like: `template_abc123xyz`

### Step 2: Update Your Code

Replace the placeholder template ID in `src/components/Contact.tsx`:

```typescript
const templateId = 'YOUR_ACTUAL_TEMPLATE_ID'; // Replace with your real template ID
```

### Step 3: Test the Configuration

1. **Open Browser Console** (F12)
2. **Fill out the contact form**
3. **Submit and check console logs**
4. **Look for these messages**:
   - "Attempting to send email with EmailJS..."
   - "Service ID: service_r7cb437"
   - "Template ID: [your-template-id]"
   - "EmailJS Result: [result]"

## 🔧 **Alternative Solutions**

### Option 1: Use Fallback Method (Currently Active)
The form now has a fallback that opens your email client if EmailJS isn't configured. This works immediately.

### Option 2: Complete EmailJS Setup
Follow the steps above to get full EmailJS functionality.

### Option 3: Use a Different Email Service
Consider alternatives like:
- Formspree
- Netlify Forms
- GetForm

## 🐛 **Common Issues & Solutions**

### Issue 1: "Template not found"
**Solution**: Make sure your template ID is correct and the template exists in your EmailJS dashboard.

### Issue 2: "Service not found"
**Solution**: Verify your service ID and ensure the email service is properly connected.

### Issue 3: "Invalid public key"
**Solution**: Check that your public key is correct and active.

### Issue 4: CORS errors
**Solution**: This is usually handled by EmailJS, but check if your domain is allowed.

## 📋 **Checklist**

- [ ] EmailJS account created
- [ ] Email service connected (Gmail)
- [ ] Email template created
- [ ] Template ID copied correctly
- [ ] Service ID is correct
- [ ] Public key is correct
- [ ] Template variables match code
- [ ] Browser console checked for errors

## 🆘 **Need Help?**

1. **Check browser console** for detailed error messages
2. **Verify all IDs** in EmailJS dashboard
3. **Test with a simple template** first
4. **Contact EmailJS support** if issues persist

## 💡 **Quick Fix**

If you want to get the form working immediately while setting up EmailJS:

1. The fallback method is already active
2. It will open your email client with the message
3. This works without any EmailJS configuration
4. You can complete EmailJS setup later
