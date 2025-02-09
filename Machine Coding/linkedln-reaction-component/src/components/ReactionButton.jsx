/* eslint-disable react/prop-types */
import { useCallback, useRef, useState } from "react";
import { REACTIONS } from "../utils";

const ReactionList = ({ isPopoverVisible, handleSelectReaction }) => {
  return (
    <div className={`reaction-popover ${isPopoverVisible ? "visible" : ""}`}>
      {REACTIONS.map((reaction) => (
        <button
          className="reactionlist-item"
          key={reaction.id}
          onClick={() => handleSelectReaction(reaction)}
        >
          {reaction.icon}
        </button>
      ))}
    </div>
  );
};

const ReactionButton = ({ selectedReaction, setSelectedReaction }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleSelectReaction = (reaction) => {
    setSelectedReaction(reaction);
    setPopoverVisible(false);
  };

  const handleSelectDefaultReaction = () => {
    setSelectedReaction(REACTIONS[0]);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPopoverVisible(true);
  };

  // NOTE: useCallback prevent unnecessary re-creations of same function on each render.
  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setPopoverVisible(false);
    }, 200);
  }, []);

  return (
    <div
      className="reaction-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="reaction" onClick={handleSelectDefaultReaction}>
        {selectedReaction.icon} {selectedReaction.name}
      </button>

      <ReactionList
        isPopoverVisible={isPopoverVisible}
        handleSelectReaction={handleSelectReaction}
      />
    </div>
  );
};

export default ReactionButton;
