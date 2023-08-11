"use client";
import Image from "next/image";

export default function Home() {
  function toggleMenuVisibility() {
    const theItemOne = document.getElementById("mobileMenu");

    if (theItemOne) {
      theItemOne.classList.toggle("hidden");
    }
  }

  function toggleMenu() {
    const theItemTwo = document.getElementById("menuIcon");
    const theItemThree = document.getElementById("menu");

    if (theItemTwo) {
      theItemTwo.classList.toggle("rotate-180");
    }

    if (theItemThree) {
      theItemThree.classList.toggle("hidden");
    }
  }

  //email

  const mail = (header: string) => {
    window.location.href = `mailto:originfreelancestartup@proton.me?subject=${header}`;
  };

  return (
    <>
      <div className="bg-neutral-950">
        <div className="bg-neutral-950 mb-64">
          <img
            className="absolute w-screen h-screen opacity-40 hidden lg:block md:block"
            src="https://i.ibb.co/b1RrJNm/image-1-1.png"
          />
          <header className="relative z-50">
            <nav
              className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Origin</span>
                  <img
                    className="h-8 w-auto"
                    src="https://i.ibb.co/PgxFQtk/Origin.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  onClick={() => toggleMenuVisibility()}
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="lg:flex hidden items-center lg:gap-x-12">
                <div className="relative dropdown-block">
                  <button
                    type="button"
                    className="flex items-center h-10 gap-x-1 text-lg font-semibold leading-6 text-slate-200"
                    aria-expanded="false"
                  >
                    Services
                    <svg
                      className="h-6 w-6 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="dropdown-container hidden absolute -left-8 top-7 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl shadow-pink-500/50 ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg
                            className="h-6 w-6 text-gray-600 group-hover:text-pink-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                            />
                          </svg>
                        </div>
                        <div className="flex-auto">
                          <a
                            onClick={() => mail("Web Developement")}
                            className="block font-semibold hover:text-slate-900 text-slate-200"
                          >
                            Web Developement
                            <span className="absolute inset-0"></span>
                          </a>
                          <p className="mt-1 group-hover:text-slate-800 text-gray-400">
                            Frontend or backend, we are here for your web
                            developement needs.
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg
                            className="h-6 w-6 text-gray-600 group-hover:text-pink-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                            />
                          </svg>
                        </div>
                        <div className="flex-auto">
                          <a
                            onClick={() => mail("Artificial Intelligence")}
                            className="block font-semibold hover:text-slate-900 text-slate-200"
                          >
                            Artificial Intelligence
                            <span className="absolute inset-0"></span>
                          </a>
                          <p className="mt-1 group-hover:text-slate-800 text-gray-400">
                            Need anything to do with AI? We are here for you.
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg
                            className="h-6 w-6 text-gray-600 group-hover:text-pink-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                            />
                          </svg>
                        </div>
                        <div className="flex-auto">
                          <a
                            onClick={() => mail("Extensions")}
                            className="block font-semibold hover:text-slate-900 text-slate-200"
                          >
                            Extensions
                            <span className="absolute inset-0"></span>
                          </a>
                          <p className="mt-1 group-hover:text-slate-800 text-gray-400">
                            We can even help you with extensions for browsers.
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg
                            className="h-6 w-6 text-gray-600 group-hover:text-pink-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                            />
                          </svg>
                        </div>
                        <div className="flex-auto">
                          <a
                            onClick={() => mail("Other/More")}
                            className="block font-semibold hover:text-slate-900 text-slate-200"
                          >
                            More
                            <span className="absolute inset-0"></span>
                          </a>
                          <p className="mt-1 group-hover:text-slate-800 text-gray-400">
                            We listed out some services, but we can also do
                            more. Just reach out to us at{" "}
                            <p
                              style={{
                                color: "blue",
                                textDecoration: "underline",
                              }}
                              onClick={() => mail("Contacting You")}
                            >
                              originfreelancestartup@proton.me
                            </p>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-lg font-semibold leading-6 text-slate-200"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-lg font-semibold leading-6 text-slate-200"
                >
                  Our Team
                </a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
            </nav>
            <div
              id="mobileMenu"
              className="lg:hidden hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 z-10"></div>
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Origin</span>
                    <img
                      className="h-8 w-auto"
                      src="https://i.ibb.co/PgxFQtk/Origin.png"
                      alt=""
                    />
                  </a>
                  <button
                    onClick={() => toggleMenuVisibility()}
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-300"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <div className="-mx-3">
                        <button
                          onClick={() => toggleMenu()}
                          type="button"
                          className="hover:text-slate-700 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-200 hover:bg-gray-50"
                          aria-controls="disclosure-1"
                          aria-expanded="false"
                        >
                          Product
                          <svg
                            id="menuIcon"
                            className="rotate-180 h-5 w-5 flex-none"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                        <div id="menu" className="hidden mt-2 space-y-2">
                          <a
                            onClick={() => mail("Web Developement")}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:text-slate-700 hover:bg-gray-50"
                          >
                            Web Developement
                          </a>
                          <a
                            onClick={() => mail("Artificial Intelligence")}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:text-slate-700 hover:bg-gray-50"
                          >
                            Artificial Intelligence
                          </a>
                          <a
                            onClick={() => mail("Extensions")}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:text-slate-700 hover:bg-gray-50"
                          >
                            Extensions
                          </a>
                          <a
                            onClick={() => mail("Other/More")}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:text-slate-700 hover:bg-gray-50"
                          >
                            More
                          </a>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:text-slate-700 hover:bg-gray-50"
                      >
                        About Us
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:text-slate-700 hover:bg-gray-50"
                      >
                        Our Team
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:py-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-7xl cssanimation fadeInBottom">
                  Faster, Stronger, Better
                </h1>
                <p
                  style={{ animationDelay: ".4s;" }}
                  className="mt-6 text-xl leading-8 text-gray-400 cssanimation fadeInBottom"
                >
                  Origin's innovative web services enable faster and more
                  efficient website development, catering to businesses of all
                  sizes with unique solutions.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    onClick={() => mail("Contact You")}
                    style={{ animationDelay: ".8s" }}
                    className="cursor-pointer cssanimation fadeInBottom rounded-full bg-pink-600 px-8 py-3 text-lg font-semibold text-slate-200 hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                  >
                    Contact Us (Email)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate overflow-hidden bg-neutral-950 px-6  pb-12 sm:pb-16 lg:px-8">
          <p className="mt-2 mb-4 text-3xl p-10 font-bold tracking-tight text-slate-200 sm:text-5xl">
            What people think
          </p>

          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img
              className="mx-auto h-12"
              src="https://i.ibb.co/BBWm0p3/Frame-1.png"
              alt=""
            />
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-slate-200 sm:text-2xl sm:leading-9">
                <p>“Loading...”</p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="https://i.ibb.co/0hLcRd7/JSman225-Profile-Photo.png"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-slate-200">JSman225</div>
                  <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">CEO</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="pt-24 sm:pt-24 pb-12 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl p-10 font-bold tracking-tight text-slate-200 sm:text-5xl">
                Quality
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400 font-semibold">
                At{" "}
                <span className="font-semibold leading-6 text-pink-600">
                  Origin
                </span>
                , we take your and create quality work for you to be happy. We
                make sure that we don't give you anything you don't like.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 flex flex-wrap gap-10 justify-center">
            <div className="max-w-lg">
              <img
                className="w-full max-w-none rounded-md"
                src="https://i.ibb.co/Rhzr3Ts/Group-16-2.png"
                alt="App screenshot"
                width="1824"
                height="1080"
              />
            </div>
            <div className="max-w-lg">
              <img
                className="w-full max-w-none rounded-md"
                src="https://i.ibb.co/Rhzr3Ts/Group-16-2.png"
                alt="App screenshot"
                width="1824"
                height="1080"
              />
            </div>
          </div>
        </div>

        <footer className="m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0">
                <img
                  src="https://i.ibb.co/PgxFQtk/Origin.png"
                  className="h-8 mr-3"
                  alt="Flowbite Logo"
                />
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy; 2023{" "}
              <a href="#" className="hover:underline">
                Origin™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
