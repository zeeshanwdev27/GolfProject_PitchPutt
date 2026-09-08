import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const count = useMotionValue(300);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 4,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  return (
    <p className="text-6xl font-medium">
      <motion.span>{rounded}</motion.span>
      <span className="primary-text">{suffix}</span>
    </p>
  );
};

export default Counter;