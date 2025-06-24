'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Tag, Wallet } from 'lucide-react';

const benefitsData = [
  {
    id: 1,
    icon: <Gift size={32} className="text-purple-600" />,
    title: 'Amazon Voucher',
    description: 'Get ₹500 off on your next purchase',
    cta: 'Claim',
  },
  {
    id: 2,
    icon: <Tag size={32} className="text-green-600" />,
    title: 'Flipkart Deal',
    description: 'Flat 20% off on electronics',
    cta: 'View',
  },
  {
    id: 3,
    icon: <Wallet size={32} className="text-yellow-500" />,
    title: 'Credit Cashback',
    description: 'Earn ₹100 cashback on bill payments',
    cta: 'Redeem',
  },
];

const Benefits = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md animate-pulse"
          >
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-2" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full mb-4" />
            <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefitsData.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border dark:border-gray-700"
        >
          <div className="flex items-center gap-4 mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            {item.cta}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Benefits;
