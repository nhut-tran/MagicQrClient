import React, { useEffect, useRef } from "react";

const width = 1000;
const height = 1000;

const random = (min: number, max: number): number => {
  const difference = max - min;
  return min + difference * Math.random();
};

const randomInt = (min: number, max: number): number => {
  return Math.round(random(min, max));
};

const randomBool = (probability = 0.5): boolean => {
  return Math.random() > probability;
};

const randomItemInArray = <T,>(array: T[]): T => {
  return array[randomInt(0, array.length - 1)];
};

const drawStar = (size: number): string => {
  const hueRange: [number, number] = randomItemInArray([ [330, 390], [40, 60], [190, 240] ]);
  let hue = randomInt(...hueRange);
  if (hue > 360) hue -= 360;
  const saturation = randomInt(90, 100);
  const lightness = randomInt(60, 80);
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return `<circle cx="${width / 2}" cy="${height / 2}" r="${size}" fill="${color}" />`;
};

const drawPlanet = (size: number, distance: number): string => {
  const hue = randomInt(0, 360);
  const saturation = randomInt(70, 100);
  const lightness = randomInt(50, 70);
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return `<circle cx="${width / 2 + distance}" cy="${height / 2}" r="${size}" fill="${color}" class="planet" style="--start-rotation:${randomInt(0, 360)}deg; --rotation-speed:${distance * randomInt(40, 70)}ms;" />`;
};

const drawOrbit = (distance: number): string => {
  return `<circle cx="${width/2}" cy="${height/2}" r="${distance}" stroke="#ccc" fill="none" />`;
};

const addPlanets = (starSize: number): string => {
  let markup = "";
  let planetSize = randomInt(10, 50);
  let orbitDistance = starSize + randomInt(100, 120);
  while (orbitDistance + planetSize < 500) {
    markup += drawOrbit(orbitDistance) + drawPlanet(planetSize, orbitDistance);
    planetSize = randomInt(10, 50);
    orbitDistance += randomInt(100, 120);
  }
  return markup;
};

const SolarSystem: React.FC = () => {
  const svgRef = useRef<SVGGElement>(null);

  const draw = () => {
    const starSize = randomInt(70, 120);
    const markup = drawStar(starSize) + addPlanets(starSize);
    if (svgRef.current) {
      svgRef.current.innerHTML = markup;
    }
  };

  useEffect(() => {
    draw();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200"
        height="200"
        viewBox="0 0 1000 1000"
        style={{ background: "#000", width: "min(100vw, calc(100vh - 4.5em))", height: "auto" }}
        role="img"
        aria-labelledby="solarSystemTitle"
        aria-describedby="solarSystemDescription"
      >
        <title id="solarSystemTitle">A procedurally generated solar system</title>
        <desc id="solarSystemDescription">A 2D rendering of a solar system, with planets orbiting a central star.</desc>
        <g ref={svgRef} className="js-svg-wrapper" />
        <style>
          {`
            :root {
              --start-rotation: 0deg;
              --rotation-speed: 10s;
            }
            @keyframes orbit {
              from {
                transform: rotate(var(--start-rotation));
              }
              to {
                transform: rotate(calc(var(--start-rotation) + 360deg));
              }
            }
            .planet {
              animation: orbit var(--rotation-speed) infinite linear;
              transform-origin: 50% 50%;
            }
          `}
        </style>
      </svg>
    
    </div>
  );
};

export default SolarSystem;
