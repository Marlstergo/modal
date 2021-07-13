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
              <div className="mt-2 w-full">
                
                <div className="my-6 w-full flex flex-col">
                  <label className="font-semibold mb-2">Type</label>

                  <select
                    name="language"
                    className=" w-1/2  text-sm outline-none border-2 p-2 rounded-md focus:outline-none focus:ring-0"
                    id=""
                  >
                    <option value="english">Partner</option>
                    <option value="spanish">Associate</option>
                    <option value="spanish">Member</option>
                  </select>
                </div>
                <div className="w-full border-t-2 border-gray-300" />
                <div className="flex flex-wrap ">
                  <div  className="w-6/12">
                    <div className="mr-6">
                      <label className="font-semibold ">Segment</label>

                      <select
                        name="language"
                        className="hidden md:block w-full text-sm outline-none p-2 rounded-md border-2 focus:outline-none focus:ring-0"
                        id=""
                      >
                        <option value="english">Retail</option>
                        <option value="spanish">Sales</option>
                        <option value="spanish">Profits</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <div className="mr-6">
                      <label className="font-semibold ">Service</label> 

                      <select
                        name="language"
                        className="hidden md:block w-full text-sm outline-none rounded-md p-2 border-2 focus:outline-none focus:ring-0 divide-solid divide-y-2"
                        id=""
                      >
                        <option value="english">None</option>
                        <option value="spanish">Support Level 1</option>
                        <option value="spanish">Full Service</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full pt-6 mr-10  pt-">
                  <label className="font-semibold ">Name</label>
                  <input
                    className="  rounded-lg w-full mt-2 h-10  bg-white  outline-none border-2 focus:outline-none text-base 
                  focus:ring-0
                  focus:border-opacity-0"
                    type="text"
                    autoComplete="off"
                    name="state"
                    placeholder="Intersport GmBh"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-5">
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
