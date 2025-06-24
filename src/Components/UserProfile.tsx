'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md mx-auto animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div className="flex flex-col gap-2 w-full">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/5" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <div className="flex items-center gap-4">
        <img
          src="images/avatar.jpg"
          alt="Avatar"
          className="w-16 h-16 rounded-full border-2 border-purple-500"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Sufaira Ashraf</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">Level 5 Explorer 🚀</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
          <span>XP</span>
          <span>350 / 500</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div className="bg-purple-600 h-3 rounded-full" style={{ width: '70%' }} />
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
