interface QuoteProps {
  quote: {
    text: string;
    author: string;
  };
}

export function Quote({ quote }: QuoteProps) {
  return (
    <div className="h-24 flex items-center justify-center">
      <div className="transition-opacity duration-1000">
        <p className="text-lg text-gray-300 italic">"{quote.text}"</p>
        <p className="text-sm text-blue-400 mt-2">— {quote.author}</p>
      </div>
    </div>
  );
}