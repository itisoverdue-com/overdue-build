export default function SectionSubheader({
   header,
   sx,
   headerSx,
   borderSx,
   children,
}) {
   return (
      <div className={sx}>
         <h2 className={`text-3xl sm:text-5xl lg:text-left ${headerSx}`}>
            {header}
         </h2>
         <div
            className={`border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28 mx-auto md:mx-0 ${borderSx}`}
         />
         {children}
      </div>
   )
}
