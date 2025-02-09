import { useState } from "react";
import { REACTIONS } from "./utils";
import ReactionButton from "./components/ReactionButton";

function App() {
  const [selectedReaction, setSelectedReaction] = useState(REACTIONS[0]);

  return (
    <div className="container">
      <div className="post-wrapper">
        <div className="post-header"></div>
        <div className="post-content"></div>
        <div className="post-actions">
          <ReactionButton
            selectedReaction={selectedReaction}
            setSelectedReaction={setSelectedReaction}
          />
          <div>
            <button>Comment</button>
          </div>
          <div>
            <button>Repost</button>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
