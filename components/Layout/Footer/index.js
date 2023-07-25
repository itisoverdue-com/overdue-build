import React from "react"
import { SOCIALS } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"
import Brand from "../Brand"

export default function Footer() {
   const quickLinks = [
      { text: "About", link: "/about" },
      {
         text: "Events",
         link: "/events",
      },
      {
         text: "Shop",
         link: "https://itsoverdue.myshopify.com/collections/all",
      },
      { text: "Blog", link: "/blog" },
      { text: "Education", link: "/education" },
      { text: "FAQ", link: "/faq" },
      { text: "Contact", link: "/contact" },
   ]

   const contactUs = [
      {
         link: "mailto:hello@itisoverdue.com",
         text: "hello@itisoverdue.com",
         icon: (
            <svg
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g clipPath="url(#clip0_1608_3660)">
                  <path
                     d="M12.3237 10.87L21.7837 5.32C21.5114 4.91706 21.1452 4.58636 20.7167 4.35641C20.2881 4.12646 19.8101 4.00414 19.3237 4H5.32375C4.83493 3.99979 4.35346 4.11902 3.92123 4.34734C3.48901 4.57565 3.11912 4.90612 2.84375 5.31L12.3237 10.87Z"
                     fill="#333333"
                  />
                  <path
                     d="M13.3203 12.59C13.0165 12.7662 12.6716 12.8593 12.3203 12.86C11.97 12.8624 11.6251 12.7727 11.3203 12.6L2.32031 7.32996V17C2.32031 17.7956 2.63638 18.5587 3.19899 19.1213C3.7616 19.6839 4.52466 20 5.32031 20H19.3203C20.116 20 20.879 19.6839 21.4416 19.1213C22.0042 18.5587 22.3203 17.7956 22.3203 17V7.32996L13.3203 12.59Z"
                     fill="#333333"
                  />
               </g>
               <defs>
                  <clipPath id="clip0_1608_3660">
                     <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.320312)"
                     />
                  </clipPath>
               </defs>
            </svg>
         ),
         sx: "items-start border-b border-b-dark-grey",
      },
      {
         link: null,
         text: "California, Washington, Florida, Japan, China, and more to come!",
         icon: (
            <svg
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g clipPath="url(#clip0_1608_3668)">
                  <path
                     d="M12.4908 0.171875C8.33407 0.171875 4.86719 3.52024 4.86719 7.79545C4.86719 9.42191 5.35593 10.8722 6.29391 12.2313L11.9074 20.9905C12.1797 21.4163 12.8024 21.4155 13.0742 20.9905L18.712 12.2015C19.6298 10.904 20.1143 9.38056 20.1143 7.79545C20.1143 3.59181 16.6944 0.171875 12.4908 0.171875ZM12.4908 11.2607C10.5801 11.2607 9.0255 9.70611 9.0255 7.79545C9.0255 5.8848 10.5801 4.33019 12.4908 4.33019C14.4014 4.33019 15.956 5.8848 15.956 7.79545C15.956 9.70611 14.4014 11.2607 12.4908 11.2607Z"
                     fill="#333333"
                  />
                  <path
                     d="M17.9076 16.0977L14.4178 21.5537C13.5144 22.9621 11.4596 22.9574 10.5606 21.555L7.06516 16.0991C3.98967 16.8102 2.09375 18.1128 2.09375 19.6694C2.09375 22.3706 7.45003 23.8277 12.4895 23.8277C17.5291 23.8277 22.8853 22.3706 22.8853 19.6694C22.8853 18.1117 20.9868 16.8084 17.9076 16.0977Z"
                     fill="#333333"
                  />
               </g>
               <defs>
                  <clipPath id="clip0_1608_3668">
                     <rect
                        width="23.6562"
                        height="24"
                        fill="white"
                        transform="translate(0.664062)"
                     />
                  </clipPath>
               </defs>
            </svg>
         ),
         sx: "items-start border-b border-b-dark-grey",
      },
      {
         link: null,
         text: "EIN Number: 86-2819165",
         icon: (
            <svg
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <mask
                  id="mask0_1608_3680"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="3"
                  width="23"
                  height="18"
               >
                  <path
                     d="M21.6641 4H3.66406C3.39885 4 3.14449 4.10536 2.95696 4.29289C2.76942 4.48043 2.66406 4.73478 2.66406 5V19C2.66406 19.2652 2.76942 19.5196 2.95696 19.7071C3.14449 19.8946 3.39885 20 3.66406 20H21.6641C21.9293 20 22.1836 19.8946 22.3712 19.7071C22.5587 19.5196 22.6641 19.2652 22.6641 19V5C22.6641 4.73478 22.5587 4.48043 22.3712 4.29289C22.1836 4.10536 21.9293 4 21.6641 4Z"
                     fill="white"
                     stroke="white"
                     strokeWidth="2"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M18.6641 8H14.6641V12H18.6641V8Z"
                     fill="black"
                     stroke="black"
                     strokeWidth="2"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M6.66406 16H18.6641M6.66406 8H9.66406M6.66406 12H9.66406"
                     stroke="black"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </mask>
               <g mask="url(#mask0_1608_3680)">
                  <path d="M0.664062 0H24.6641V24H0.664062V0Z" fill="#333333" />
               </g>
            </svg>
         ),
         sx: "items-start",
      },
   ]
   return (
      <footer className="bg-primary  ">
         {/* Main Footer */}
         <div className="flex flex-col items-start space-y-16 mx-auto p-5 py-10 md:space-y-0 md:px-10 lg:flex-row lg:max-w-screen-2xl lg:space-x-20 lg:p-20">
            {/* Brand, Subheader, Social Links */}
            <div className="flex flex-col space-y-6 ">
               <Brand />
               <p>
                  To inspire and educate communities to take action for a better
                  tomorrow.
               </p>
               <ul className="flex space-x-4">
                  {Object.entries(SOCIALS).map(([social, link]) => (
                     <IconButton key={link} link={link} value={social} />
                  ))}
               </ul>
            </div>

            {/* Quick Links */}
            <div className="">
               <h6 className="mb-8 w-max">Quick Links</h6>
               <ul className="space-y-4  w-max">
                  {quickLinks.map((item) => (
                     <li key={item.text}>
                        <Link
                           href={item.link}
                           className="hover:underline underline-offset-2 inline"
                        >
                           {item.text}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Contact Us */}
            <div>
               <h6 className="mb-8">Contact Us</h6>
               <ul className="space-y-4">
                  {contactUs.map((item) => (
                     <li
                        key={item.text}
                        className={`flex space-x-3 pb-6 ${item.sx}`}
                     >
                        <span>{item.icon}</span>

                        {item.link ? (
                           <Link href={item.link}>{item.text}</Link>
                        ) : (
                           <span>{item.text}</span>
                        )}
                     </li>
                  ))}
               </ul>
            </div>

            {/* Call To Action: Join Our Team */}
            <div className="h-fit bg-white rounded-2xl p-5 flex flex-col space-y-4 shadow-lg">
               <div className="flex items-center">
                  {/* Icon */}
                  <svg
                     width="55"
                     height="55"
                     viewBox="0 0 65 64"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <rect
                        x="0.492188"
                        width="64"
                        height="64"
                        rx="32"
                        fill="#111111"
                     />
                     <g clipPath="url(#clip0_1608_3690)">
                        <path
                           d="M37.8283 18.4251H35.4869C35.1948 18.4161 34.9437 18.2152 34.8708 17.9322C34.6489 16.7795 33.6204 15.9602 32.4473 16.0016C31.2671 15.9809 30.2437 16.8136 30.0238 17.9733C29.9479 18.2485 29.6929 18.4355 29.4077 18.4252H27.1484V22.5328H37.8283V18.4251Z"
                           fill="#FDD92A"
                        />
                        <path
                           d="M44.4029 46.1106V22.5738C44.4054 21.6437 43.6533 20.8877 42.7232 20.8852C42.6806 20.8851 42.638 20.8866 42.5955 20.8896H39.0629V22.9845C39.0629 23.3132 38.8575 23.765 38.5289 23.765H26.4114C26.0827 23.765 25.9185 23.3132 25.9185 22.9845V20.8897H22.3859C21.4583 20.8216 20.6511 21.5185 20.5831 22.4461C20.5799 22.4887 20.5784 22.5313 20.5786 22.5739V46.1106C20.5556 47.1312 21.3644 47.9772 22.385 48.0001C22.3854 48.0001 22.3857 48.0001 22.386 48.0001H42.5956C43.6162 47.9777 44.4253 47.1321 44.4029 46.1115C44.4029 46.1112 44.4029 46.1109 44.4029 46.1106ZM29.1635 40.6885L25.9595 43.6871C25.8571 43.8097 25.7083 43.884 25.5488 43.8925C25.3772 43.8857 25.215 43.8119 25.097 43.6871L23.4129 41.9619C23.189 41.7112 23.2074 41.3275 23.4539 41.0993C23.6935 40.8645 24.0769 40.8645 24.3165 41.0993L25.5487 42.4137L28.342 39.7848C28.622 39.5916 29.0058 39.6618 29.199 39.9419C29.3568 40.1704 29.3421 40.4761 29.1635 40.6885ZM29.1635 34.1163L25.9595 37.1149C25.8571 37.2374 25.7083 37.3118 25.5488 37.3202C25.3772 37.3135 25.215 37.2397 25.097 37.1149L23.4129 35.3896C23.189 35.139 23.2074 34.7552 23.4539 34.5271C23.6935 34.2922 24.0769 34.2922 24.3165 34.5271L25.5487 35.8415L28.342 33.2126C28.622 33.0193 29.0058 33.0896 29.199 33.3697C29.3568 33.5981 29.3421 33.9038 29.1635 34.1163ZM29.1635 27.544L25.9595 30.5426C25.8571 30.6652 25.7083 30.7396 25.5488 30.748C25.3772 30.7412 25.215 30.6675 25.097 30.5426L23.4129 28.8174C23.189 28.5668 23.2074 28.183 23.4539 27.9548C23.6935 27.72 24.0769 27.72 24.3165 27.9548L25.5487 29.2693L28.342 26.6403C28.622 26.4471 29.0058 26.5174 29.199 26.7974C29.3568 27.0259 29.3421 27.3316 29.1635 27.544ZM41.1167 43.0709H31.6691C31.3288 43.0709 31.053 42.795 31.053 42.4548C31.053 42.1145 31.3288 41.8386 31.6691 41.8386H41.1167C41.4569 41.8386 41.7328 42.1145 41.7328 42.4548C41.7328 42.795 41.457 43.0709 41.1167 43.0709ZM41.1167 36.4987H31.6691C31.3288 36.4987 31.053 36.2228 31.053 35.8825C31.053 35.5423 31.3288 35.2664 31.6691 35.2664H41.1167C41.4569 35.2664 41.7328 35.5423 41.7328 35.8825C41.7328 36.2228 41.457 36.4987 41.1167 36.4987ZM41.1167 29.9265H31.6691C31.3288 29.9265 31.053 29.6506 31.053 29.3103C31.053 28.97 31.3288 28.6941 31.6691 28.6941H41.1167C41.4569 28.6941 41.7328 28.97 41.7328 29.3103C41.7328 29.6507 41.457 29.9265 41.1167 29.9265Z"
                           fill="#FDD92A"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_1608_3690">
                           <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(16.4922 16)"
                           />
                        </clipPath>
                     </defs>
                  </svg>
                  {/* Header */}
                  <h6 className="ml-4">Join Our Team!</h6>
               </div>

               {/* Subheader */}
               <p className="">
                  Learn how to become a team member and help make a better
                  future together!
               </p>

               {/* Sign Up Link */}
               <Link href="/join">
                  <button className="bg-primary w-full py-4 font-medium rounded-md transition-colors duration-300 hover:bg-darkest-grey hover:text-primary">
                     Sign Up Now!
                  </button>
               </Link>
            </div>
         </div>

         {/* Copyright */}
         <div className="py-6 px-3 bg-primaryDark">
            <p className="text-center text-dark-grey text-sm">
               © 2023 itisOVERDUE. Made with love and responsibility. All Rights
               Reserved. itisOVERDUE is a 501(c)(3) nonprofit organization.
            </p>
         </div>
      </footer>
   )
}

const IconButton = ({ link, value }) => {
   const icons = {
      facebook: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
         </svg>
      ),
      instagram: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
            <circle cx="11.994" cy="11.979" r="3.003"></circle>
         </svg>
      ),
      twitter: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
         </svg>
      ),
      youtube: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-inherit"
            width="24"
            height="24"
         >
            <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
         </svg>
      ),
   }
   return (
      <Link href={link} target="_blank">
         <button className="p-2 rounded-full bg-black bg-opacity-50 transition-all duration-200 hover:-translate-y-1 hover:bg-opacity-90 fill-white hover:fill-primary">
            {icons[value]}
         </button>
      </Link>
   )
}
