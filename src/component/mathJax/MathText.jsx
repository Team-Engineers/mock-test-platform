import React from "react";
import { MathComponent } from "mathjax-react";

export const MathText = ({ text, textTag = "p" }) => {
  const TextTag = textTag || "p";

  if (typeof text !== "string") {
    text = text.toString();
  }

  text = text.trim();

  const parts = text.split(/\n/);

  const jsxElements = parts.flatMap((part, index) => {
    const hasMathExpression = /\$.+?\$/.test(part);
    const hasHTMLTags = /<.*?>/.test(part);

    if (hasMathExpression) {
      const subparts = part.split(/\$(.*?)\$/);

      return subparts.map((subpart, subIndex) => {
        if (subIndex % 2 !== 0) {
          return (
            <React.Fragment key={`${index}_${subIndex}`}>
              <MathComponent
                tex={subpart}
                display={false}
                className="math-expression"
              />
              <br className="minimal-space" />
            </React.Fragment>
          );
        } else {
          return <span key={`${index}_${subIndex}`}>{subpart}</span>;
        }
      });
    } else if (hasHTMLTags) {
      return [
        <TextTag
          key={`html_${index}`}
          className="text-spacing"
          dangerouslySetInnerHTML={{ __html: part }}
        />,
      ];
    } else {
      // Replace line breaks with a space character
      const contentWithSpaces = part.replace(/\n/g, " ");

      return [
        <span key={index}>{contentWithSpaces}</span>,
        <br key={`br_${index}`} className="minimal-space" />,
      ];
    }
  });

  return <TextTag className="text-spacing">{jsxElements}</TextTag>;
};
