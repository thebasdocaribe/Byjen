import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  const safeProgress = Number(progress) || 0;

  return (
    <Html center>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {safeProgress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
