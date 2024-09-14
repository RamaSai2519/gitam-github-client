import React from 'react';

const TestPage = () => {
  const words = [
    "Repository", "Commit", "Fork", "Pull Request", "Issue", "Branch", "Merge", "Clone",
    "README", "Push", "Workflow", "Tag", "Release", "Actions", "Wiki", "Gitignore",
    "Markdown", "Milestone", "Stash", "Rebase", "Diff", "Blame", "Squash", "Gist", "Octocat"
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generateBingoCard = (key) => {
    const shuffledWords = shuffleArray([...words]);
    return (
      <div key={key} className="grid grid-cols-5 gap-1 border-2 border-black p-2 bg-white">
        <div className="col-span-5 flex items-center justify-center text-4xl font-bold border border-black p-2">
          BINGO
        </div>
        {shuffledWords.slice(0, 25).map((word, index) => (
          <div key={index} className="flex items-center justify-center border border-black min-h-[40px] text-center text-sm">
            {word}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center font-sans p-5">
      <div className="grid grid-cols-4 gap-1">
        {Array.from({ length: 150 }, (_, index) => generateBingoCard(index))}
      </div>
    </div>
  );
}

export default TestPage;