// app/components/FeedItem.tsx
import { FiThumbsUp, FiShare2, FiMessageSquare } from "react-icons/fi";

interface FeedItemProps {
  id: number;
  title: string;
  content: string;
}

export const FeedItem: React.FC<FeedItemProps> = ({ id, title, content }) => {
  return (
      <div className="p-4 border-b-2 ">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="mb-4">{content}</p>
        <div className="flex justify-between">
          <button className="flex items-center text-muted hover:text-primary">
            <FiThumbsUp size={18} className="mr-1" />
            <span>Like</span>
          </button>
          <button className="flex items-center text-muted hover:text-primary">
            <FiShare2 size={18} className="mr-1" />
            <span>Share</span>
          </button>
          <button className="flex items-center text-muted hover:text-primary">
            <FiMessageSquare size={18} className="mr-1" />
            <span>Comment</span>
          </button>
        </div>
      </div>
  );
};
