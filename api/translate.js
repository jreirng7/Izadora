export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text, fromLang, toLang } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: `You are a precise ${fromLang} to ${toLang} translator. 
Return ONLY the translation — no explanations, no quotes, no notes. 
If the input is 1-2 words, add a brief usage note in parentheses after the translation.`,
        messages: [{ role: 'user', content: text }],
      }),
    });

    const data = await response.json();
    const translation = data.content?.[0]?.text || 'Translation unavailable.';
    res.status(200).json({ translation });
  } catch (err) {
    res.status(500).json({ error: 'Translation failed', detail: err.message });
  }
}
