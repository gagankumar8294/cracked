import React from 'react';
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';
import Videofirst from '@/comps/ytvideos/Video_1';

const FirstPost = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }
  return (
    <div>
      <h1>My First Blog Post</h1>
        <Videofirst />
      <p>This is my first blog post. I'm excited to share it with you!</p>
      <FacebookComments href="http://localhost:3000/blog/first-post" />
    </div>
  );
};

export default FirstPost;