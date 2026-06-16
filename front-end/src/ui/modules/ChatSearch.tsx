import React from 'react';

const ChatSearch = () => {
  return (
    <div className="relative z-30 max-w-[1000px] mx-auto px-6 -mt-24 lg:-mt-32 reveal">
      <div className="bg-white p-3 rounded-[2.5rem] flex flex-col border border-gray-200">
        <div className="flex items-center w-full bg-white rounded-[2rem] px-6 py-4 shadow-sm border border-brand-border/40 transition-all hover:border-brand-green/30 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green/10">
          <img src="/assets/images/chatbot.png" alt="Laboratoire" className="w-8 h-8 mr-4 animate-pulse object-contain" />
          <input 
            type="text" 
            placeholder="Posez votre question fiscale ou choisissez une action ci-dessous..." 
            className="flex-1 bg-transparent border-none outline-none text-base font-medium text-brand-text placeholder:text-brand-muted/70"
          />
          
          <button className="w-12 h-12 bg-brand-green hover:bg-[#005532] text-white rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <img src="/assets/images/envoyer.png" alt="send" className="w-7 h-auto object-contain" />
          </button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 mb-2">
          <SuggestionButton text="Comment déclarer mes revenus ?" />
          <SuggestionButton text="Quelles sont mes échéances ?" />
          <SuggestionButton text="Comment obtenir mon quitus fiscal ?" />
        </div>
      </div>
    </div>
  );
};

const SuggestionButton = ({ text }: { text: string }) => (
  <button className="px-5 py-2 rounded-full bg-white border border-brand-border/60 text-sm font-medium text-brand-muted hover:text-brand-blue hover:border-brand-blue/30 transition-all shadow-sm">
    {text} <span className="ml-1 opacity-50">&rsaquo;</span>
  </button>
);

export default ChatSearch;
