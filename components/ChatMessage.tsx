
import React from 'react';
import { Message, Sender } from '../types';
import { BotIcon, UserIcon } from './Icons';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === Sender.USER;

  const wrapperClasses = `flex items-start gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`;
  const messageClasses = `max-w-xs md:max-w-md lg:max-w-2xl px-4 py-3 rounded-2xl shadow-md ${isUser ? 'bg-indigo-600 text-white rounded-br-lg' : 'bg-gray-700 text-gray-200 rounded-bl-lg'}`;
  const iconWrapperClasses = `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-indigo-500 text-white order-2' : 'bg-gray-600 text-white'}`;

  // Simple markdown-like rendering for code blocks
  const renderText = (text: string) => {
    const parts = text.split(/(\`\`\`[\s\S]*?\`\`\`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        const code = part.slice(3, -3).trim();
        return (
          <pre key={index} className="bg-gray-900/50 text-white p-3 rounded-lg overflow-x-auto my-2">
            <code className="text-sm font-mono">{code}</code>
          </pre>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={wrapperClasses}>
      <div className={iconWrapperClasses}>
        {isUser ? <UserIcon className="w-5 h-5" /> : <BotIcon className="w-5 h-5" />}
      </div>
      <div className={`${messageClasses} ${isUser ? 'order-1' : ''}`}>
        <div className="whitespace-pre-wrap">{renderText(message.text)}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
