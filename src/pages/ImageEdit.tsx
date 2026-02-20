import { useState } from 'react';

export default function ImageEdit() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    // AI-powered image editing logic will go here
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Nano Banana Image Editor</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">Prompt</label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Add a retro filter"
          />
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 font-semibold transition-colors disabled:bg-gray-500"
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>
      {image && (
        <div className="mt-8">
          <img src={image} alt="Generated image" className="rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}
