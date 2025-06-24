'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const RewardPoints = () => {
  const rewardPercentage = 65;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-10 max-w-sm mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto mb-6" />
        <div className="w-40 h-40 rounded-full bg-gray-300 dark:bg-gray-700 mx-auto" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 max-w-sm mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Reward Points</h2>
      <div className="relative w-40 h-40 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="gray"
            strokeWidth="10"
            fill="none"
            className="text-gray-300 dark:text-gray-600"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className="text-purple-600"
            strokeDasharray={282.6}
            strokeDashoffset={282.6 - (282.6 * rewardPercentage) / 100}
            transition={{ duration: 1 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            {rewardPercentage}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RewardPoints;
