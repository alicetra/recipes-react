import React from 'react';

const RecipeInstruction = ({ instruction }) => {
  return (
    <div>
      <p className="subtitle is-5">
        Instruction:
      </p>
      <div>
        {instruction.map((step, index) => (
          <div key={index}> {index + 1}: {step}</div>
        ))}
      </div>
    </div>

  );
};

export default RecipeInstruction