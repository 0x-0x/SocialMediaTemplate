// app/components/FeedsSection.tsx
import { useState, useEffect, useRef } from "react";
import { FeedItem } from "./FeedItem";

interface Feed {
  id: number;
  title: string;
  content: string;
}

export const FeedsSection = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const feedsRef = useRef<HTMLDivElement>(null);

  const loadFeeds = async () => {
    if (isLoading) return;

    setIsLoading(true);

    // Simulating an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newFeeds: Feed[] = [];
    const startId = (page - 1) * 25 + 1;
    const endId = page * 25;

    for (let i = startId; i <= endId; i++) {
      newFeeds.push({
        id: i,
        title: `Feed ${i}`,
        content: `This is the content of feed ${i}.`,
      });
    }

    setFeeds((prevFeeds) => {
      // Remove duplicate feeds based on their IDs
      const uniqueFeeds = newFeeds.filter(
        (newFeed) => !prevFeeds.some((prevFeed) => prevFeed.id === newFeed.id)
      );
      return [...prevFeeds, ...uniqueFeeds];
    });

    setPage((prevPage) => prevPage + 1);
    setHasMore(endId < 100);
    setIsLoading(false);
  };

  useEffect(() => {
    loadFeeds();
  }, []);

  useEffect(() => {
    const feedsElement = feedsRef.current;

    const handleScroll = () => {
      if (feedsElement) {
        const { scrollTop, clientHeight, scrollHeight } = feedsElement;
        if (
          hasMore &&
          !isLoading &&
          scrollTop + clientHeight >= scrollHeight - 100
        ) {
          loadFeeds();
        }
      }
    };

    if (feedsElement) {
      feedsElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (feedsElement) {
        feedsElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasMore, isLoading]);

  useEffect(() => {
    // Reset the feeds and page when switching between desktop and mobile views
    setFeeds([]);
    setPage(1);
    setHasMore(true);
  }, []);

  return (
    <div
      ref={feedsRef}
      className="h-full overflow-y-scroll hide-scrollbar bg-background"
    >
      <div className="flex-col">
        {feeds.map((feed) => (
          <FeedItem
            key={feed.id}
            id={feed.id}
            title={feed.title}
            content={feed.content}
          />
        ))}
        {isLoading && (
          <div className="flex justify-center items-center p-4 bg-background">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        {!hasMore && (
          <div className="text-center p-4 bg-background">
            No more feeds to load.
          </div>
        )}
      </div>
    </div>
  );
};
