# Izadora — Deploy Instructions

## What's in this folder
- `index.html` — The full Izadora app
- `api/chat.js` — Backend: Claude Opus conversational tutor
- `api/translate.js` — Backend: AI-powered translator
- `vercel.json` — Vercel routing config
- `package.json` — Project config

## How to Deploy to Vercel

### Step 1 — Upload to GitHub
1. Go to github.com and create a new repository called "izadora"
2. Upload all these files (drag and drop works)
3. Commit/save

### Step 2 — Connect to Vercel
1. Go to vercel.com and log in
2. Click "Add New Project"
3. Import your "izadora" GitHub repo
4. Click Deploy

### Step 3 — Add your Anthropic API Key
1. In Vercel, go to your project Settings → Environment Variables
2. Add a new variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: your Anthropic API key (from console.anthropic.com)
3. Click Save, then Redeploy the project

### Step 4 — Done!
Your Izadora app will be live at a Vercel URL like:
`https://izadora-yourusername.vercel.app`

## Notes
- The conversational AI (Izadora persona) uses Claude Opus
- Translation uses Claude Sonnet (faster, cheaper)
- No Google Cloud TTS needed yet — using browser voices for now
- Can add Google TTS later for better pronunciation
