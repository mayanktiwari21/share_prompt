import React from 'react';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        className="my-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-santoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            required
            className="form_textarea"
            placeholder="Write your AI Prompt here..."
            value={post.prompt}
            onChange={(event) =>
              setPost({ ...post, prompt: event.target.value })
            }
          ></textarea>
        </label>
        <label>
          <span className="font-santoshi font-semibold text-base text-gray-700">
            Tag &nbsp;
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            required
            className="form_input"
            placeholder="#tag"
            value={post.tag}
            onChange={(event) => setPost({ ...post, tag: event.target.value })}
          ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-gray-500 text" href="/">
            Cancel
          </Link>

          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
