import { motion } from "framer-motion";

const transition = (Component) => {
  return () => {
    <>
      <Component />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 w-full h-full bg-[#0f0f0f] origin-bottom"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 w-full h-full bg-white origin-top"
      />
    </>;
  };
};

export default transition;
