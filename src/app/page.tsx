import UserProfile from '../Components/UserProfile';
import Benefits from '../Components/Benefits'
import RewardPoints from '../Components/RewardPoints';
import ThemeToggle from '@/Components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />
      <UserProfile />
      <Benefits />
      <RewardPoints />
    </main>
  );
}