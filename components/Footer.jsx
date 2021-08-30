import Button from "./Button";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-16 md:px-20 bg-tertiary text-tertiary-lightest">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        <div className="mb-12 xl:mb-0">
          <p className="text-sm font-semibold uppercase text-tertiary-light mb-7">
            Solutions
          </p>
          <ul className="flex flex-col gap-7">
            <li>
              <a href="#" className="hover:text-primary">
                Screen Sharing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Commerce
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Insights
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-12 xl:mb-0">
          <p className="text-sm font-semibold uppercase text-tertiary-light mb-7">
            Resources
          </p>
          <ul className="flex flex-col gap-7">
            <li>
              <a href="#" className="hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                API Status
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-12 xl:mb-0">
          <p className="text-sm font-semibold uppercase text-tertiary-light mb-7">
            Company
          </p>
          <ul className="flex flex-col gap-7">
            <li>
              <a href="#" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-12 xl:mb-0">
          <p className="text-sm font-semibold uppercase text-tertiary-light mb-7">
            Help
          </p>
          <ul className="flex flex-col gap-7">
            <li>
              <a href="#" className="hover:text-primary">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Tutorials
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="text-sm font-semibold uppercase text-tertiary-light mb-7">
            Subscribe to our Newsletter
          </p>
          <p className="mb-9">
            Get the latest news, articles, and resources, sent to your inbox
            every week.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              className="w-full px-4 py-5 rounded-lg"
              placeholder="Email"
            />
            <Button text="Subscribe" isPrimary />
          </div>
        </div>
      </div>
      <div className="box-border flex flex-wrap justify-between mt-16 border-t border-tertiary-dark pt-7">
        <div className="mb-5 mr-6 sm:mb-0">
          &copy; {new Date().getFullYear} Acme, Inc. All rights reserved.
        </div>
        <div className="flex gap-7">
          <a href="#" className="hover:opacity-70">
            <img src="/facebook.png" alt="facebook logo" />
          </a>
          <a href="#" className="hover:opacity-70">
            <img src="/twitter.png" alt="twitter logo" />
          </a>
          <a href="#" className="hover:opacity-70">
            <img src="/instagram.png" alt="instagram logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
