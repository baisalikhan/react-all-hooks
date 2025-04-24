import React, { useState, useTransition } from "react";

const ExpensiveCalculation = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const [isPending, startTransition] = useTransition();

  // Simulate an expensive calculation
  const calculate = (value) => {
    const newResults = [];

    for (let i = 0; i < 999999999; i++) {
      // console.log(i);
    }

    // Simulate heavy work by running many calculations
    for (let i = 0; i < 20000; i++) {
      const result = i * parseInt(value || "0", 10);

      if (i % 1000 === 0) {
        newResults.push(result);
      }
    }

    return newResults;
  };

  const handleInputChange = (e) => {
    // Update the input value immediately
    const newValue = e.target.value;
    setInput(newValue);

    // defer the calculation to avoid blocking the UI thread
    startTransition(() => {
      const calculatedResults = calculate(newValue);
      setResults(calculatedResults);
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2>useTransition Demo</h2>

      <div>
        <label>
          Enter a number:{" "}
          <input type="number" value={input} onChange={handleInputChange} />
        </label>
      </div>

      {isPending ? (
        "Loading..."
      ) : (
        <div>
          <h3>Results:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                {index * 1000} x {input} = {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExpensiveCalculation;
