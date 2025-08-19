
import { AbsoluteFill } from "remotion";
import { Overlay } from "./Overlay";
import { Overlay2 } from "./Overlay2";

export const CombinedVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Overlay />
      <Overlay2 />
    </AbsoluteFill>
  );
};