
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { Message, Sender } from './types';
import ChatMessage from './components/ChatMessage';
import TypingIndicator from './components/TypingIndicator';
import { SendIcon, GeminiIcon } from './components/Icons';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeChat = () => {
      try {
        // Fix: Use process.env.API_KEY as per coding guidelines, which also resolves the TypeScript error.
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
          setError("API_KEY tidak ditemukan. Harap tambahkan ke Environment Variables Anda.");
          return;
        }
        const ai = new GoogleGenAI({ apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: 'You are a helpful and friendly AI assistant. Your name is Gemini. Answer questions and engage in conversation in a clear and concise way.',
          },
        });
        setMessages([
          {
            id: 'init',
            sender: Sender.MODEL,
            text: 'Hello! I am Gemini. How can I help you today?',
          },
        ]);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred during initialization.');
        }
      }
    };
    initializeChat();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || !chatSessionRef.current) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: Sender.USER,
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const stream = await chatSessionRef.current.sendMessageStream({ message: userMessage.text });

      let firstChunk = true;
      let modelResponse = '';
      let modelMessageId = Date.now().toString() + '-model';

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        if (firstChunk) {
          setIsLoading(false);
          modelResponse += chunkText;
          setMessages((prev) => [...prev, { id: modelMessageId, sender: Sender.MODEL, text: modelResponse }]);
          firstChunk = false;
        } else {
          modelResponse += chunkText;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === modelMessageId ? { ...msg, text: modelResponse } : msg
            )
          );
        }
      }
      
      if (firstChunk) { // Handle case where stream is empty
        setIsLoading(false);
      }

    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Error: ${errorMessage}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white font-sans">
      <header className="bg-gray-900/70 backdrop-blur-sm p-4 border-b border-gray-700 shadow-lg flex items-center gap-3 z-10">
        <GeminiIcon className="w-8 h-8"/>
        <h1 className="text-xl font-bold text-gray-200">Gemini Simple Chat</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
          {error && (
             <div className="flex items-start gap-3 my-4 justify-start">
                <div className="max-w-xs md:max-w-md lg:max-w-2xl px-4 py-3 rounded-2xl shadow-md bg-red-800/50 text-red-200 rounded-bl-lg">
                  <p className="font-semibold">Terjadi Kesalahan</p>
                  <p className="text-sm mt-1">{error}</p>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="bg-gray-900/70 backdrop-blur-sm border-t border-gray-700 p-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={error ? "Harap selesaikan error untuk melanjutkan" : "Ketik pesan Anda..."}
              disabled={isLoading || !!error}
              className="flex-1 bg-gray-700 border border-gray-600 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 text-gray-200 disabled:opacity-50"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim() || !!error}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900/50 disabled:cursor-not-allowed text-white rounded-full p-3 transition-colors duration-300 flex-shrink-0"
              aria-label="Send message"
            >
              <SendIcon className="w-6 h-6" />
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default App;
