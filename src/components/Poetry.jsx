import React from "react";
import poems from "../components/Poems/poems.json";

const Poetry = () => {
  return (
    <div className="poems-container" key="poem-container">
      {poems.map((poem) => {
        return (
          <div className="poem-container" key={poem.id}>
            <div className="poem-title">{poem.title}</div>
            <div className="poem-author">BY SALIMA RIVERA</div>
            <div className="poem-verse">
              For Lillian Died: Our vows to love, honor, and cherish. Time: Left
              suddenly on a bright summer day Cause of Death: misgivings,
              duplicity and lack of faith. The dearly departed left behind a
              discarded lover who has inherited an estate of left over memories
              and a grievous soul. The deceased will be remembered for the
              laughter and joy that had brought us together in a happier time.
              Services will be held in the heart, its body interred in the past.
              Please send no flowers.
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Poetry;
