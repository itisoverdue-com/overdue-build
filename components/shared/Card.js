// the Card component can be used for either the standard text or images boxes
// if

export default function TextCard({ children }) {
   return (
      <div className="w-full py-8 px-11 rounded-[20px] shadow-[0_6px_18px_0_rgba(0,0,0,0.2)]">
         {children}
      </div>
   )
}
