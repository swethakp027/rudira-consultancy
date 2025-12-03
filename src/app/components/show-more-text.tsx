"use client";
import { useState } from "react";

export default function ShowMoreText({ text, maxLength = 150 }:{ text:string, maxLength: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const showText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div>
      <p>
        {showText}
        {text.length > maxLength && !isExpanded ? "..." : ""}
      </p>

      {text.length > maxLength && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-medium mt-1"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      )}
    </div>
  );
}
