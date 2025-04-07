
import { LexRuntimeV2 } from 'aws-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

const lex = new LexRuntimeV2({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { text } = req.body;

  try {
    const response = await lex.recognizeText({
      botId: process.env.LEX_BOT_ID!,
      botAliasId: process.env.LEX_BOT_ALIAS_ID!,
      localeId: 'en_US',
      sessionId: 'user-session',
      text,
    }).promise();

    res.status(200).json({ message: response.messages?.[0]?.content || 'No response.' });
  } catch (error) {
    res.status(500).json({ error: 'Lex error', detail: error });
  }
}
