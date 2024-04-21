// app/components/BottomBar.tsx
import { FiHome, FiUser, FiBell } from 'react-icons/fi';

interface BottomBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background p-4 flex justify-around items-center md:hidden">
      <button
        className={`flex flex-col items-center ${
          activeSection === 'feeds' ? 'text-blue-500' : 'text-gray-500'
        }`}
        onClick={() => onSectionChange('feeds')}
      >
        <FiHome size={24} />
        <span className="text-xs">Feeds</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          activeSection === 'profile' ? 'text-blue-500' : 'text-gray-500'
        }`}
        onClick={() => onSectionChange('profile')}
      >
        <FiUser size={24} />
        <span className="text-xs">Profile</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          activeSection === 'notifications' ? 'text-blue-500' : 'text-gray-500'
        }`}
        onClick={() => onSectionChange('notifications')}
      >
        <FiBell size={24} />
        <span className="text-xs">Notifications</span>
      </button>
    </footer>
  );
};