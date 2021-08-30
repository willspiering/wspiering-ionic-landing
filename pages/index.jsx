import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import FeatureItem from "../components/FeatureItem";

export default function Home() {
  return (
    <>
      <Head>
        <title>Acme, Inc.</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full text-text">
        <section className="grid w-full lg:grid-cols-12 bg-background">
          <div className="px-4 text-center md:text-left lg:col-span-7 md:px-20 py-36 md:pt-44">
            <h1 className="mb-10 text-4xl font-bold md:text-6xl">
              <span className="block text-text-dark">Your best work.</span>
              <span className="block text-primary">Done together.</span>
            </h1>
            <p className="mt-3 mb-10 text-2xl">
              Build better a business, faster. Start sharing your work across
              your company—in realtime.
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <Button text="Try it Free" isPrimary />
              <Button text="Download" />
            </div>
          </div>
          <div className="relative hidden col-span-5 lg:block">
            <Image
              src="/hero.png"
              width={620}
              height={634}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="flex flex-col items-center w-full px-4 py-40 bg-white sm:px-20 gap-14">
          <div className="max-w-2xl text-center">
            <p className="mb-4 text-base tracking-widest uppercase text-text-light">
              Features
            </p>
            <h2 className="mb-5 text-4xl font-bold text-text-dark">
              A better way to work together
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="grid items-center justify-center max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            <FeatureItem
              icon="/chatBubble.png"
              heading="Communicate in realtime"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            />
            <FeatureItem
              icon="/rocket.png"
              heading="Do your best work"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            />
            <FeatureItem
              icon="/clock.png"
              heading="Avoid costly revisions"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            />
            <FeatureItem
              icon="/cloud.png"
              heading="Everything in one place"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            />
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-between w-full px-4 py-12 md:p-20 bg-background">
          <header className="mr-6 mb-7">
            <h3 className="text-4xl font-bold text-text-dark">
              Ready to start?
            </h3>
            <h3 className="text-4xl font-bold text-primary">
              Sign up for free today.
            </h3>
          </header>
          <div className="flex gap-4">
            <Button text="Try it free" isPrimary />
            <Button text="Learn More" />
          </div>
        </section>
      </main>
    </>
  );
}
