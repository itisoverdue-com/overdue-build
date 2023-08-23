export default function SectionSubheader({
   header,
   sx,
   headerSx,
   borderSx,
   children,
}) {
   return (
      <div className={sx}>
         <h2 className={headerSx}>{header}</h2>
         <div
            className={`mx-auto my-4 w-20 rounded-full border-t-8 border-primary dark:border-white md:mx-0 md:my-5 md:w-28 ${borderSx}`}
         />
         {children}
      </div>
   )
}
