import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import Loader from "../Loader";

// تفعيل DRACO
const useDRACOLoader = (url) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/"); // حدد مسار DRACO الخاص بك
  loader.setDRACOLoader(dracoLoader);
  return loader.load(url);
};

const Computers = ({ isMobile }) => {
  // تحميل النموذج باستخدام DRACO
  const computer = useGLTF("./desktop_pc/scene.gltf", useDRACOLoader);

  return (
    <mesh>
      <hemisphereLight intensity={0.05} groundColor="black" />
      <directionalLight
        position={[0, 5, 5]}
        intensity={1}
        castShadow={false} // إيقاف الظلال لتقليل الاستهلاك
      />
      <pointLight intensity={0.5} /> {/* تقليل شدة الضوء */}
      <primitive
        receiveShadow={false} // إيقاف الظلال إذا كانت غير ضرورية
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.7} // تقليل الحجم بشكل أكبر للأجهزة المحمولة
        position={isMobile ? [0, -2, -2] : [0, -2, -1.5]} // تعديل الموضع
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]} // تقليل دقة العرض لتقليل استهلاك الذاكرة
      camera={{ position: [20, 3, 5], fov: 30 }} // تقليل مجال الرؤية
      gl={{ preserveDrawingBuffer: false }} // تعطيل الاحتفاظ بالصورة لتقليل الذاكرة المستهلكة
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate={false} // إيقاف التدوير التلقائي للكاميرا لتقليل استهلاك الموارد
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
