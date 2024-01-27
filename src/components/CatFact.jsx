import React, { useState, useEffect } from 'react';

function CatFact() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(json => setFact(json.fact))
  }, []);

  return (
    <div>
      {fact ? fact : "Loading..."}
    </div>
  );
}

export default CatFact;
