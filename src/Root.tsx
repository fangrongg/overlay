import "./index.css";
import { Composition } from "remotion";
import { CombinedVideo } from "./CombinedVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CombinedVideo"
        component={CombinedVideo}
        durationInFrames={75}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};