import React from "react";
import { LinkPreview } from "./link-preview";

export const Header = () => {
  return (
    <div>
      <div className="text-foreground pt-4 text-base">
        I'm a 19 year old software engineer by choice, tinkering with AI and
        code almost 86.7% of the time. I'm mostly active on{" "}
        <LinkPreview url="https://x.com/8narayanmishra">
          X / Twitter
        </LinkPreview>{" "}
        where I do not share anything.
      </div>
      <div className="text-foreground pt-4 text-base">
        When I'm not coding, I'm usually immersed in the reading of ancient
        Indian philosophical texts or playing the piano.{" "}
        <LinkPreview url="https://vichaar.vercel.app/">
          Articles I write.
        </LinkPreview>
      </div>
      <div className="text-foreground pt-4 text-base">
        I've been building upon a very interesting project called{" "}
        <LinkPreview url="https://folish.vercel.app/">Folish</LinkPreview> for
        the past 18 days. A modern way to access and preserve knowledge stored
        in legacy Old Folio Views databases. My favourite part is figuring out
        how to bring old knowledge archives into the modern world.
      </div>
    </div>
  );
};
