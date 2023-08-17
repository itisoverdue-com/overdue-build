import { XCircleIcon } from "@heroicons/react/24/outline"

export default function DonationModal({ setShowModal }) {
   return (
      <div id="donorbox-modal-container">
         <div id="modal" className="fixed left-[4%] top-12 z-30 w-[92%]">
            <div
               className="flex justify-end"
               onClick={() => setShowModal(false)}
            >
               <XCircleIcon className="h-12 w-12 text-white" />
            </div>
            <div className="mt-2 bg-white">
               <iframe
                  src="https://donorbox.org/embed/donation-overdue"
                  name="donorbox"
                  allowpaymentrequest="allowpaymentrequest"
                  seamless="seamless"
                  className="h-[475px] max-h-none w-full min-w-[250px] max-w-[500px] border-2"
               ></iframe>
            </div>
         </div>
         <div
            id="backdrop"
            className="fixed left-0 top-0 z-20 h-screen w-full bg-black/[.85]"
            onClick={() => setShowModal(false)}
         />
      </div>
   )
}
