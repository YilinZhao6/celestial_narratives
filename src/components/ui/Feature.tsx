interface FeatureProps {
  title: string;
  description: string;
}

export function Feature({ title, description }: FeatureProps) {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
  );
}