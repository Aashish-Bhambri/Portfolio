# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Contact form

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages from the browser.

1. Create an EmailJS email service and email template.
2. Set the template's **To Email** to your own inbox as a fixed address. Do not use a sender variable such as `{{contact_email}}` for the recipient, and do not create an auto-reply template. Use `{{from_name}}`, `{{contact_email}}`, and `{{message}}` in the email body to see the sender's details. Set Reply-To to `{{reply_to}}` so you can reply to the sender.
3. For local development, copy `.env.example` to `.env.local` and provide your EmailJS service ID, template ID, and public key.
4. Restart the Vite development server after editing environment variables.

The form sends one notification to the recipient configured in the EmailJS template; it does not send a confirmation email to the sender. The recipient and any auto-reply behavior are controlled by your EmailJS dashboard template settings.

### Deployment

Vite embeds `VITE_` variables into the site at build time. Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` to your hosting provider's **build environment variables** (not just a runtime/server environment), then trigger a new build and deployment. `.env.local` is ignored by Git and is not deployed.

Also add your production website's exact origin (scheme and hostname, without a path) to the allowed origins in your EmailJS account settings. Check the browser console for the EmailJS error if the form still fails after redeploying.

The EmailJS public key is intended for browser use. Configure allowed origins and abuse protection for your deployed site.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
