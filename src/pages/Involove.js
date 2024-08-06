import React from "react";

const Involove = () => {
  return (
    <div className="bg-white">
      <section className="h-screen w-full relative">
        <div className="flex w-full items-center justify-center relative">
          <div className="text-white absolute top-20 bottom-0 left-[20%] right-0 flex items-center z-20 w-full">
            <a href="/">
              <img
                src="/images/Layer-2.png"
                className="w-48 h-auto object-cover mr-16"
              />
            </a>
            <div className="flex items-center gap-16 text-lg">
              <a href="/" className="uppercase text-white font-bold">
                <a>homepage</a>
              </a>

              <a href="/about" className="uppercase text-white font-bold">
                <a>about</a>
              </a>

              <a href="/policy" className="uppercase text-white font-bold">
                <a>policy</a>
              </a>

              <a href="/involve" className="uppercase text-white font-bold">
                <a>get involved</a>
              </a>

              <a
                href="/campaign"
                className="uppercase text-white font-bold text-center"
              >
                <p className="bg-darkRed rounded-lg px-4 py-2">
                  <a className="flex flex-col items-center justify-center">
                    presidential campaign <span>2024</span>
                  </a>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute left-[16%] right-[16%] top-[80%] text-white font-semibold text-2xl z-20 text-center tracking-wide">
          <h1 className="text-center font-bold text-4xl">
            "Building a Future Where Opportunity <br /> Knows No Boundaries."
          </h1>

          <p className="uppercase tracking-wider text-xl mt-8">
            Help fulfill our promise to Make SRI LANKA Great!
          </p>
        </div>

        <div className="w-full h-full">
          <div className="w-full h-full bg-black/50 absolute top-0 left-0 right-0 bottom-0" />
          <img
            src="/images/about/woman-walks-through-field-with-sun-setting-her.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-20 left-0 right-0 w-full flex items-center justify-center"></div>
      </section>

      <section className="relative">
        <div className="flex items-center">
          <div className="w-full h-8 bg-darkRed"></div>
          <div className="w-full h-8 bg-green"></div>
          <div className="w-full h-8 bg-saffron"></div>
          <div className="w-full h-8 bg-yellow"></div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-4 gap-20 mt-16 mb-32 px-44">
          <div className="flex flex-col items-center">
            <img
              src="/images/involvement/layer-40.png"
              alt=""
              className=" w-44 h-44 object-cover mb-16"
            />
            <h1 className="font-bold text-3xl text-darkRed text-center">
              Women's Empowerment
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/involvement/layer-38.png"
              alt=""
              className=" w-44 h-44 object-cover mb-16"
            />
            <h1 className="font-bold text-3xl text-darkRed text-center">
              Education Reform
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/involvement/layer-39.png"
              alt=""
              className=" w-44 h-44 object-cover mb-16"
            />
            <h1 className="font-bold text-3xl text-darkRed text-center">
              Economic Development
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/involvement/layer-41.png"
              alt=""
              className=" w-44 h-44 object-cover mb-16"
            />
            <h1 className="font-bold text-3xl text-darkRed text-center">
              Digital Engagement
            </h1>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="flex items-center">
          <div className="w-full h-8 bg-darkRed"></div>
          <div className="w-full h-8 bg-green"></div>
          <div className="w-full h-8 bg-saffron"></div>
          <div className="w-full h-8 bg-yellow"></div>
        </div>
      </section>

      <section className="relative bg-darkRed h-auto w-full pt-16">
        <div>
          <img
            src="/images/lsquo.png"
            alt="lsquo"
            className="absolute z-10 top-10 bottom-0 left-10 right-0 w-36 h-auto object-cover"
          />
        </div>

        <div className="flex items-center flex-col justify-center w-full mt-32 text-center px-64 text-white mb-32">
          <h1 className="uppercase font-bold text-3xl mb-12">Volunteer</h1>
          <p className="px-32">
            Indira Kalugalla’s campaign is dedicated to transformative policies
            that champion women's rights, education, economic growth, and
            digital advancement. She advocates for strong legislative measures
            to ensure gender equality and comprehensive educational reforms to
            provide quality learning for all. Her economic policies focus on
            supporting SMEs and creating job opportunities, while her digital
            engagement initiatives aim to make government services more
            accessible and foster greater digital literacy. Indira’s vision is a
            prosperous, inclusive Sri Lanka where every citizen can thrive.
          </p>
        </div>

        <div className="bg-yellow mx-32 rounded-3xl py-16 px-36 flex items-start justify-between mb-44">
          <div className="w-full">
            <p className="text-5xl font-bold tracking-wide mb-12">
              Get in Touch <br /> With Us
            </p>

            <p className="mb-12">
              We encourage you to contact us with any questions or <br />{" "}
              comments you may have.
            </p>

            <div>
              <div className="flex items-center mb-8">
                <div className="rounded-full h-10 w-10 object-cover flex items-center justify-center p-3 bg-white mr-4">
                  <img src="images/involvement/location.png" className="" />
                </div>
                <p className="text-sm">
                  HONALI PLAZA 24741 ALICIA PARKWAY, SUITE A <br /> LAGUNA
                  HILLS, CALIFORNIA 92653
                </p>
              </div>

              <div className="flex items-center mb-8">
                <div className="rounded-full h-10 w-10 object-cover flex items-center justify-center p-3 bg-white mr-4">
                  <img src="images/involvement/mail.png" className="" />
                </div>
                <p className="text-sm">info@drroth.com</p>
              </div>

              <div className="flex items-center mb-8">
                <div className="rounded-full h-10 w-10 object-cover flex items-center justify-center p-3 bg-white mr-4">
                  <img src="images/involvement/phone.png" className="" />
                </div>
                <p className="text-sm">(949) 855-0450</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full mb-6">
              <p>First Name*</p>
              <div className="w-full rounded-lg bg-white p-4">
                <p>Your Name</p>
              </div>
            </div>

            <div className="w-full mb-6">
              <p>Email Address*</p>
              <div className="w-full rounded-lg bg-white p-4">
                <p>Email Address</p>
              </div>
            </div>

            <div className="w-full mb-6">
              <p>Phone Number*</p>
              <div className="w-full rounded-lg bg-white p-4">
                <p>Phone Number</p>
              </div>
            </div>

            <div className="w-full mb-6">
              <p>Message*</p>
              <div className="w-full rounded-lg bg-white p-4 h-24">
                <p>Message</p>
              </div>
            </div>

            <div className="cursor-pointer">
              <div className="text-white rounded-lg bg-green px-16 py-4 w-44 flex items-center justify-center">
                <p>Submit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[800px] w-full">
          <img
            src="/images/video.png"
            alt="video"
            className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center text-center py-44 px-4">
          <h1 className="text-3xl font-semibold uppercase mb-10">Donate</h1>

          <div className=" px-96">
            <p className="mb-4">
              Donation Information: Your financial support is crucial to our
              campaign's success. Every contribution helps us reach more people,
              organize impactful events, and promote our vision for a prosperous
              Sri Lanka. Learn more about how you can donate and make a
              difference.
            </p>

            <p>
              Fundraising Events: Join us at our fundraising events where you
              can meet Indira Kalugalla and other supporters, and learn more
              about our campaign. These events are a great way to contribute to
              our cause while engaging with the community. Check our schedule
              for upcoming events.
            </p>
          </div>
        </div>

        <div className="relative h-[800px] w-full">
          <img
            src="/images/video.png"
            alt="video"
            className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-darkRed py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold uppercase mb-10 text-white">
            Donate
          </h1>

          <div className="text-white text-center py-12 px-96">
            <div className="mb-10">
              <p className="text-xl uppercase">Office Locations: </p>
              <p className="uppercase">
                Visit our campaign offices to learn more about how you can get
                involved, pick up campaign materials, or speak with our team.
                Our offices are open to all supporters who want to contribute to
                our mission.
              </p>
            </div>

            <div className="mb-10">
              <p className="text-xl uppercase">email and phone: </p>
              <p className="uppercase">
                Have questions or need more information? Reach out to us via
                email at info@indira2024.lk or call us at +94 77 123 4567. We
                are here to assist you and provide any information you need
                about the campaign.
              </p>
            </div>

            <div className="mb-10">
              <p className="text-xl uppercase">Stay Connected: </p>
              <p className="uppercase">
                Follow us on social media and stay updated with the latest news
                and events from Indira Kalugalla’s campaign.
              </p>
            </div>

            <div className="w-full text-center flex items-center justify-center">
              <img src="images/involvement/social.png" className="h-8" />
            </div>

            <div className=" flex items-center justify-between px-96 gap-4 mt-8">
              <div className="rounded-lg bg-white p-4 w-full text-start">
                <p className="text-black">Enter your email address</p>
              </div>
              <div className="bg-yellow rounded-lg px-8 py-4">
                <img
                  src="/images/involvement/search-green.png"
                  className="h-6 w-9 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-20 mt-16 mb-32 px-96">
          <div className="flex flex-col items-center">
            <img
              src="/images/about/layer-30.png"
              alt=""
              className=" w-24 h-24 object-cover mb-16"
            />
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/about/layer-28.png"
              alt=""
              className=" w-24 h-24  object-cover mb-16"
            />
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/about/layer-29.png"
              alt=""
              className=" w-24 h-24 object-cover mb-16"
            />
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/about/layer-31.png"
              alt=""
              className=" w-24 h-24  object-cover mb-16"
            />
          </div>
        </div>

        <p className="text-xl text-yellow font-semibold  text-center px-96">
          Indira Kalugalla’s policies reflect her unwavering commitment to
          building a prosperous, inclusive, and forward-thinking Sri Lanka. By
          focusing on women's empowerment, education reform, economic
          development, and digital engagement, she aims to create a nation where
          every citizen has the opportunity to thrive. Join us in supporting
          Indira Kalugalla’s vision for a brighter future for Sri Lanka.
        </p>

        <div className="rounded-lg p-8 flex items-center justify-center flex-col bg-yellow mx-72">
          <p className="text-darkRed text-5xl font-semibold mb-12">
            Subscribe Us
          </p>

          <p className="text-darkRed">
            Subscribe our newsletter to get weekly updates!
          </p>

          <div className=" flex items-center justify-between px-96 gap-4 mt-8 mb-12">
            <div className="rounded-lg bg-white p-4 w-full text-start">
              <p className="text-black">Enter your email address</p>
            </div>
            <div className="bg-green text-white w-72 rounded-lg px-4 py-4">
              <p>Subscribe Now</p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <img
            src="/images/rsquo.png"
            className="w-32 absolute z-20 right-0 -top-4 bottom-0"
          />
        </div>
      </section>

      <section className="w-full">
        <div className="bg-yellow h-auto w-full flex items-end p-4 z-40 shadow-2xl">
          <h1 className="uppercase font-bold text-4xl text-white">Empower</h1>
        </div>
        <div className="bg-saffron h-auto w-full flex items-end py-8 p-4 z-30 shadow-inner shadow-black/40 ">
          <h1 className="uppercase font-bold text-4xl text-white">unity</h1>
        </div>
        <div className="bg-green h-auto w-full flex items-end p-4 py-8 z-20 shadow-inner shadow-black/40 ">
          <h1 className="uppercase font-bold text-4xl text-white">progress</h1>
        </div>
        <div className="bg-darkRed h-auto w-full flex items-center flex-col p-4 pt-16 pb-0 z-10 shadow-inner shadow-black/40 ">
          <img
            src="/images/lion.png"
            alt="lion"
            className="w-96 h-auto object-cover"
          />

          <div className="grid grid-cols-6 gap-8 px-64 my-16">
            <a href="/" className="uppercase text-yellow font-bold">
              <a>home</a>
            </a>

            <a href="/" className="uppercase text-yellow font-bold">
              <a>about</a>
            </a>

            <a href="/" className="uppercase text-yellow font-bold">
              <a>campaign</a>
            </a>

            <a href="/" className="uppercase text-yellow font-bold">
              <a>volunteer</a>
            </a>

            <a href="/" className="uppercase text-yellow font-bold">
              <a>dontate</a>
            </a>

            <a href="/" className="uppercase text-yellow font-bold">
              <a>contact</a>
            </a>
          </div>

          <img
            src="/images/layer-24.png"
            alt="lion"
            className="w-72 h-auto object-cover mb-14"
          />

          <div className="text-yellow uppercase text-xl text-center">
            <p>Follow us:</p>

            <img
              src="/images/layer-25.png"
              alt="lion"
              className="w-72 h-auto object-cover mb-14"
            />
          </div>

          <p className="text-yellow uppercase text-xl text-center px-96">
            Together, we can make a difference. Your support and involvement are
            crucial in our journey towards a brighter, more inclusive future.
            Follow us on social media, stay updated with our latest news, and
            get involved in our campaign to create a prosperous nation for all.
          </p>

          <h1 className="text-yellow uppercase my-16 text-4xl font-">
            Join Us in Building a Prosperous Sri Lanka
          </h1>
          <div className="h-2 bg-yellow w-full shadow-2xl mx-28" />

          <div className="w-full py-4 flex items-center justify-center h-auto">
            <p className="text-yellow">
              &copy; 2024 All Right Reserved By indira kalugalla
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Involove;
