'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('');

  const { data: session } = useSession();

  const pathname = usePathname();

  const router = useRouter();

  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => {
      setCopied('');
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt.creator.image}
            alt={prompt.creator.name}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-santoshi font-semibold text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn flex items-center gap-2" onClick={handleCopy}>
          <Image
            src={
              copied === prompt.prompt
                ? '/assets/icons/tick.svg'
                : '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-santoshi text-sm text-gray-700">
        {prompt.prompt}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick?.(prompt.tag)}
      >
        #{prompt.tag}
      </p>

      {session?.user.id === prompt.creator._id && pathname === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-200 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
