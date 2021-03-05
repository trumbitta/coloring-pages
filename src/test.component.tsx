import { FC, useCallback, useEffect, useRef } from "react";

interface TestProps {
  currentColor: string;
}

export const Test: FC<TestProps> = ({ currentColor }) => {
  const svgRef = useRef(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      const svgElement = event.target as SVGElement;
      svgElement.setAttribute("fill", currentColor);
    },
    [currentColor]
  );

  const toggleClickEvents = useCallback(
    (
      elements: SVGElement[],
      method: "addEventListener" | "removeEventListener"
    ) => {
      console.log(elements.length);

      for (const element of elements) {
        element[method]("click", (event) => handleClick(event as MouseEvent));
      }
    },
    [handleClick]
  );

  useEffect(() => {
    const svgElement = (svgRef.current as unknown) as SVGElement;
    const notableElementsNodeList = svgElement.querySelectorAll<SVGElement>(
      "[id]"
    );
    const notableElements = Object.entries(notableElementsNodeList).map(
      ([_, element]) => element
    );

    toggleClickEvents(notableElements, "addEventListener");

    return () => {
      toggleClickEvents(notableElements, "removeEventListener");
    };
  }, [toggleClickEvents]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="auto"
      viewBox="0 0 739 828"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="head" fill="transparent">
        <rect
          id="Rectangle 1"
          x="130"
          y="124"
          width="493"
          height="288"
          stroke="black"
          strokeWidth="4"
        />
      </g>
      <g id="Group 3" fill="transparent">
        <rect
          id="Rectangle 2"
          x="130"
          y="416"
          width="493"
          height="288"
          stroke="black"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
};
