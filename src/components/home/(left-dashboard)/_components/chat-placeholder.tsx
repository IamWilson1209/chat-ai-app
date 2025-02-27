import { Lock } from 'lucide-react';
import Image from 'next/image';

const ChatPlaceHolder = () => {
  return (
    <div className="w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center w-full justify-center py-10 gap-4">
        <video
          className="rounded-lg"
          width="320"
          height="188"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Image src={'/capybara.webp'} alt="Hero" width={320} height={188} />
        <p className="text-3xl font-extralight mt-5 mb-2">
          Instant Answers, Infinite Possibilities – ShuanChat.
        </p>
        <p className="w-1/2 text-center text-gray-primary text-sm text-muted-foreground">
          Start your chat with friends, family and colleagues!!
        </p>
      </div>
      <p className="w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1">
        <Lock size={10} /> This app is secured by Shuan.corp & Convex
      </p>
    </div>
  );
};
export default ChatPlaceHolder;
