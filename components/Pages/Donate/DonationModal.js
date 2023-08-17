import { XCircleIcon } from "@heroicons/react/24/outline"

export default function DonationModal({ setShowModal }) {
   const handleClick = () => {
      setShowModal(false)
      const wrapper = document.getElementById("wrapper")
      wrapper.classList.remove("is-fixed")
   }
   return (
      <div id="donorbox-modal-container">
         <div
            id="modal"
            className="fixed left-1/2 top-1/4 z-30 w-full max-w-[430px] -translate-x-1/2 -translate-y-[20%]"
         >
            <div className="flex justify-end" onClick={handleClick}>
               <XCircleIcon className="h-12 w-12 text-white hover:cursor-pointer" />
            </div>
            <div className="mt-2">
               <iframe
                  src="https://donorbox.org/embed/donation-overdue"
                  name="donorbox"
                  allowpaymentrequest="allowpaymentrequest"
                  seamless="seamless"
                  frameBorder="0"
                  scrolling="no"
                  className="h-[650px] max-h-none w-full min-w-[250px] max-w-[500px] border-none"
               ></iframe>
            </div>
         </div>
         <div
            id="backdrop"
            className="fixed left-0 top-0 z-20 h-screen w-full bg-black/[.85]"
            onClick={handleClick}
         />
      </div>
   )
}
