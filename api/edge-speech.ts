import cors from '../lib/cors';
import { EdgeSpeechPayload, createEdgeSpeech } from '../src/core/EdgeSpeechTTS/createEdgeSpeech';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  const payload = (await req.json()) as EdgeSpeechPayload;

  const res = await createEdgeSpeech({ payload });

  return cors(req, res);
};
