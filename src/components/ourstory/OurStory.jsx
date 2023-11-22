/* eslint-disable react/no-unescaped-entities */
const OurStory = () => {
  return (
    <div id="story" className="bg-sky-50 pt-5">
      <div className="w-10/12 ml-auto mr-auto grid grid-cols-1 md:grid-cols-2">
        <div className="md:self-center">
          <img
            src="/images/bee.jpg"
            className="rounded blur-[0.1rem] hover:blur-0"
          />
        </div>
        <article className="prose lg:prose-xl dark:prose-invert p-5 md:p-9 text-slate-600">
          <h2 className=" text-center font-openSans text-sky-950">
            From the couple...
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            asperiores quas excepturi. Quod vel minus nemo magni quos similique
            tempora, a voluptatibus dolores veritatis, ab omnis architecto id
            accusantium blanditiis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            asperiores quas excepturi. Quod vel minus nemo magni quos similique
            tempora, a voluptatibus dolores veritatis, ab omnis architecto id
            accusantium blanditiis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            asperiores quas excepturi. Quod vel minus nemo magni quos similique
            tempora, a voluptatibus dolores veritatis, ab omnis architecto id
            accusantium blanditiis!
          </p>
          {/* <cite>Bride: Faithfulness Albert</cite> */}
        </article>
      </div>
      <div className=" flex justify-center items-center pb-5">
        <div className="">
          <h1 className=" font-playfair text-2xl text-center font-bold text-slate-700">
            The Couple
          </h1>
          <div className="text-center w-64 font-pacifico text-slate-700">
            <p>Faithfulness Albert</p>
            <p>&amp;</p>
            <p>Victor Udofot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
