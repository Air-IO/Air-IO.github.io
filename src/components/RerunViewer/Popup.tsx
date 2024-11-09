'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { DownloadIcon, XIcon } from 'lucide-react'

type PopupWindowProps = {
  title: string;
  subtitle?: string | null;
  download?: string | null;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function PopupWindow({ onClose, title, children = null, subtitle = null, download = null }: PopupWindowProps) {

  return (
    <Dialog open={true} onClose={() => onClose()} className="relative z-30">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            style={{ maxWidth: '90vw' }}
          >
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4" style={{ backgroundColor: "#0d1011" }}>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="flex justify-between align-middle items-center">
                  <span className="text-lg font-semibold leading-6 text-gray-300">{title}</span>
                  {
                    subtitle === null ? null :
                      <span className="text-sm font-normal text-gray-500">{subtitle}</span>
                  }
                  <div>
                    {
                      download === null ? null :
                        <a download href={download}>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 sm:ml-3 sm:w-auto"
                          >
                            <DownloadIcon size={16} />
                          </button>
                        </a>
                    }
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      <XIcon size={16} />
                    </button>
                  </div>
                </DialogTitle>
                <div className="mt-2">
                  {children}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
