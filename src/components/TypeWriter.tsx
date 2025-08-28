import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetweenTexts]);

  return (
    <span className="font-medium">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;