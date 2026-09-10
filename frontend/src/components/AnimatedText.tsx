import { motion, type ElementType, type Variants } from "motion/react";

interface AnimatedTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
  triggerOnView?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (staggerChildren: number) => ({
    transition: {
      staggerChildren,
    },
  }),
};

const word: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 5 },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

function AnimatedText({
  text,
  as = "p",
  className = "",
  delay = 0.2,
  stagger = 0.04,
  once = true,
  amount = 0.3,
  triggerOnView = true,
}: AnimatedTextProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.p;

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      {...(triggerOnView
        ? { whileInView: "visible", viewport: { once, amount } }
        : { animate: "visible" })}
      transition={{ delayChildren: delay }}
    >
      {text.split(" ").map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block">
          {w}&nbsp;
        </motion.span>
      ))}
    </MotionTag>
  );
}

export default AnimatedText;