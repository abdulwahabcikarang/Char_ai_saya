
import React from 'react';
import { BotIcon } from './Icons';

const TypingIndicator: React.FC = () => (
  <div className="flex items-start gap-3 my-4 justify-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-600 text-white">
      <BotIcon className="w-5 h-5" />
    </div>
    <div className="max-w-xs md:max-w-md lg:max-w-2xl px-4 py-3 rounded-2xl shadow-md bg-gray-700 text-gray-200 rounded-bl-lg">
      <div className="flex items-center justify-center space-x-1 h-5">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default TypingIndicator;
