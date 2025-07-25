"use client";

import { useRef, useState } from "react";
import CharacterCount from "./CharacterCount";

const TweetBox = () => {
  const CHARACTER_LIMIT = 280;
  const [tweetContent, setTweetContent] = useState("");
  const [submittedTweet, setSubmittedTweet] = useState("");
  const textareaRef = useRef(null);

  const characterCount = tweetContent.length;
  const limitExceeded = characterCount > CHARACTER_LIMIT;
  const isValid = characterCount > 0 && !limitExceeded;

  const submitTweetContent = () => {
    setSubmittedTweet(tweetContent);
    setTweetContent("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <textarea
        ref={textareaRef}
        value={tweetContent}
        placeholder="What's on your mind?"
        onChange={(e) => setTweetContent(e.target.value)}
        rows={4}
        style={{ width: "300px" }}
      />
      {limitExceeded && (
        <span style={{ color: "red" }}>Tweet is too long!</span>
      )}
      <CharacterCount
        characterCount={characterCount}
        characterLimit={CHARACTER_LIMIT}
      />
      <button onClick={submitTweetContent} disabled={!isValid}>
        Post
      </button>

      {submittedTweet && (
        <div style={{ marginTop: "16px" }}>
          <h4>Your Tweet:</h4>
          <p>{submittedTweet}</p>
        </div>
      )}
    </div>
  );
};

export default TweetBox;
