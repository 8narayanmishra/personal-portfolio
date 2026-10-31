"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Subheading } from "./subheading";

const GITHUB_USERNAME = "8narayanmishra";

function colorToHex(color: string) {
  const match = color.match(
    /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+[\d.]+)?\s*\)/,
  );

  if (match) {
    return [match[1], match[2], match[3]]
      .map((channel) => Math.round(Number(channel)).toString(16).padStart(2, "0"))
      .join("");
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext("2d");

  if (!context) return "2563eb";

  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);
  const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;

  return [red, green, blue]
    .map((channel) => channel.toString(16).padStart(2, "0"))
    .join("");
}

export function GitHubContributions() {
  const { resolvedTheme } = useTheme();
  const [chartColor, setChartColor] = useState("2563eb");

  useEffect(() => {
    const updateChartColor = () => {
      const styles = getComputedStyle(document.documentElement);
      const primary = styles.getPropertyValue("--primary").trim();
      const foreground = styles.getPropertyValue("--foreground").trim();
      setChartColor(
        colorToHex(resolvedTheme === "dark" ? foreground || primary : primary),
      );
    };

    updateChartColor();

    const observer = new MutationObserver(updateChartColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    return () => observer.disconnect();
  }, [resolvedTheme]);

  return (
    <section>
      <Subheading>GitHub activity</Subheading>
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Narayan Mishra's GitHub profile"
        className="mt-6 block rounded-lg"
      >
        <img
          src={`https://ghchart.rshah.org/${chartColor}/${GITHUB_USERNAME}`}
          alt={`GitHub contribution graph for ${GITHUB_USERNAME}`}
          className="h-auto w-full"
        />
      </a>
    </section>
  );
}
