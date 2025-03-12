import { motion } from 'framer-motion';
import '../styles/hero.css';

export default function Hero() {
    return (
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Web Developer | React Enthusiast | Problem Solver
        </motion.p>
      </motion.section>
    );
  }