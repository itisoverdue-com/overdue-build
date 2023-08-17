export default function DonationModal({ setShowModal }) {
   return (
      <div>
         <iframe
            src="https://donorbox.org/embed/donation-overdue"
            name="donorbox"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameborder="0"
            scrolling="no"
            height="900px"
            width="100%"
            style={{
               maxWidth: "500px",
               minWidth: "250px",
               maxHeight: "none!important",
            }}
         ></iframe>
      </div>
   )
}
