export default function PageSubheader({ header, sx, children }) {
   return (
      <div className={`md:w-[55%] md:pr-12 xl:pr-4 lg:w-[45%] ${sx}`}>
         <h2 className="md:text-left">{header}</h2>
         <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28 mx-auto md:mx-0" />
         {children}
      </div>
   )
}
