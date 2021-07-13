import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ closeModal, isOpen }) => (
  <div>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                New Account
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent your
                  an email with all of the details of your order.
                </p>
                <select
                  name="language"
                  className="hidden md:block w-2/6 text-sm outline-none border-0 focus:outline-none focus:ring-0"
                  id=""
                >
                  
                  
                  <option value="english">All Category</option>
                  <option value="spanish">Es</option>
                  <option value="spanish"><li>
                    <a
                      href="#googtrans(en|ja)"
                      class="lang-es lang-select"
                      data-lang="ja"
                    >
                      <img
                        src="https://www.solodev.com/assets/google-translate/flag-japan.png"
                        alt="JAPAN"
                      />
                    </a>
                  </li></option>
                  <option value="spanish"><li>
                    <a
                      href="#googtrans(en|zh-CN)"
                      class="lang-es lang-select"
                      data-lang="zh-CN"
                    >
                      <img
                        src="https://www.solodev.com/assets/google-translate/flag-china.png"
                        alt="CHINA"
                      />
                    </a>
                  </li></option>
                </select>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Create
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  </div>
);

export default Modal;
