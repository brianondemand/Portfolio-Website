/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Intro() {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    setClasses("visible");
  }, []);

  return (
    <section id="intro" className={classes}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          I&apos;m <span>Brian Muiruri</span>
          <br />
          Full-Stack Web Developer,
          <br />
          Cyber Security Expert and System Admin
        </p>
        <a href="">Contact me</a>
      </motion.div>
      <div>
        <img src="/img/dev.png" alt="" />
      </div>
    </section>
  );
}
