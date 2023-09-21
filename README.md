# Beginner Chat API Frontend

_A getting started project for working with the ChatGPT API in the frontend_

This application was initialized with [`npm create vite@latest`](https://vitejs.dev/guide/) in React with TypeScript and uses the [Chat Completions API](https://platform.openai.com/docs/guides/gpt/chat-completions-api) from OpenAI.

It has everything you need to quickly get started using the [ChatGPT API](https://platform.openai.com/docs/introduction) in a frontend project.

## Getting started

These instructions assume you already have an OpenAI account. If you don't, go to [openai.com](https://openai.com/) and create one!

1. Clone this repo (if you have the GitHub CLI, it's as easy as `gh repo clone bildungsroman/beginner-chat-api`)
2. `cd beginner-chat-api && npm install`
3. Go to [your API keys](https://platform.openai.com/account/api-keys) in OpenAI and click `Create new secret key`. Copy your new key.
4. Create an `.env` file in the root of the directory and set your new key there:
   `echo VITE_OPENAI_API_KEY=<Your API Key here> > .env`
5. Run `npm run dev` and you should be able to open your app locally and start interacting with the prompts. If you encounter any errors, there are some `console.log()`s you can uncomment in `src/utils/callChatAPI.ts` to help you debug issues.

And that's it! This is just to get you started building an app that utilizes the ChatGPT API - just imagine the possibilities 🪄🧙🦄

**Standard please don't sue me if you go broke disclaimer**: You may need to upgrade your OpenAI account or add credits to use the API if you have a free account. Please don't go overboard, they really don't need your money at this point.
