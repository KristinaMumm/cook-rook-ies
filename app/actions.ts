'use server';

import { CoreSystemMessage, CoreMessage, generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function getAnswer(messagesInput : CoreMessage[]) {
    const { text, finishReason, usage } = await generateText({
    model: openai('gpt-3.5-turbo'),
    messages: messagesInput
  });

  return { text, finishReason, usage };
}
