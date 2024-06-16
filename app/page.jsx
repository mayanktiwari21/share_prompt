import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          &nbsp; AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Unleash your creativity and explore the endless possibilities of AI with
        SharePrompt, the ultimate platform for sharing and discovering creative
        AI prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
