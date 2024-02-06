/* eslint-disable react/no-unescaped-entities */
const OurStory = () => {
  return (
    <div id="story" className="bg-sky-50 pt-5">
      <div className="w-10/12 ml-auto mr-auto grid grid-cols-1 md:grid-cols-2">
        <div className="md:self-center">
          <img
            src="/images/bee.jpg"
            className="rounded"
          />
        </div>
        <article className="prose lg:prose-xl dark:prose-invert p-5 md:p-9 text-slate-600">
          <h2 className=" text-center font-openSans text-sky-950">
            From the couple...
          </h2>
          <p>
            Dear Friends and Family, We are overwhelmed with gratitude for the
            immense love and support you've shown us throughout our journey.
            From the bottom of our hearts, we extend our sincerest thanks for
            being a part of our special day and for embracing our love story
            with such warmth and enthusiasm. We are deeply touched by the
            thoughtful messages, kind gestures, and well-wishes that have poured
            in from all corners. Your unwavering support has made our union even
            more meaningful and joyous. Your
            contribution has made our wedding planning journey smoother and more
            memorable. As we embark on this new chapter together, we carry your
            love and blessings with us. Our hearts are filled with gratitude for
            each and every one of you who has made this day possible. With love
            and appreciation.
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
