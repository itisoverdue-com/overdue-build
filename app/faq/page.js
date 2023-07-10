import PageHero from "@/components/shared/PageHero"
import Card from "@/components/shared/Card"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
export default function FAQ() {
   const cards = [
      {
         question: "How long does the cleanup last?",
         answer: "1 hour",
      },
      {
         question: "How often do you go?",
         answer:
            "Depends on the location, but Woodland Hills, Canoga Park and West Hills are daily.",
      },
      {
         question: "What should I wear to clean up?",
         answer: "Bright colors and closed toe shoes.",
      },
      {
         question: "Where do you host cleanups?",
         answer:
            "Right now, we host cleanups in the following locations: \n    California\n        Canoga Park\n        West Hills\n        Woodland hills\n    Ohio\n        Cleveland\n    Washington\n        Greater Seattle Area",
      },
      {
         question: "Where do you dispose of garbage bags?",
         answer:
            "We have discussed this with the city of Los Angeles and agreed to leave our garbage bags by the city trash cans, then report it on the 311 app to get them collected. When we have a large number of bags, especially on weekends, we use the city's dumpster or we call the sanitation department to get them collected.\nAs we expand to new hubs across the United States, please check with your local cleanup leaders if you have any questions regarding trash disposal.",
      },
      {
         question: "How can I sign up?",
         answer:
            "You can sign up for our newsletter to receive email updates for our schedules. You can choose from daily, weekly, monthly updates.",
      },
      {
         question: "Do I need to bring anything?",
         answer: "Please bring your gloves and grabbers.",
      },
      {
         question: "Can I bring friends or family?",
         answer:
            "We are always on a lookout for great community leaders who want to make their community better. Be a leader to make a great impact in your community🎊 Contact us at hello@itisoverdue.com. We will help you set up a cleanup in your neighborhood!",
      },
      {
         question:
            "I want to host regular cleanups in my neighborhood. What should I do?",
         answer:
            "We are always on a lookout for great community leaders who want to make their community better. Be a leader to make a great impact in your community🎊 Contact us at hello@itisoverdue.com. We will help you set up a cleanup in your neighborhood!",
      },
      {
         question: "Is it dog friendly?",
         answer:
            "We are always on a lookout for great community leaders who want to make their community better. Be a leader to make a great impact in your community🎊 Contact us at hello@itisoverdue.com. We will help you set up a cleanup in your neighborhood!",
      },
   ]
   return (
      <div>
         <PageHero
            page="FAQ"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441391/backgrounds/faq_z3arfk.jpg"
         />

         {/* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-flow: dense; */}
         <FullBleedContainer sx="bg-background" childSx="py-32">
            <div className="columns-2 gap-10">
               {cards.map((item) => (
                  <Card
                     key={item.question}
                     sx={`flex flex-col space-y-4 p-10 border mb-10 shadow-lg w-full h-auto overflow-hidden even:bg-dark-grey even:text-white`}
                  >
                     <span className="text-primary text-5xl font-black">
                        Q.
                     </span>
                     <p className="text-3xl font-bold">{item.question}</p>
                     <p className="text-lg">{item.answer}</p>
                  </Card>
               ))}
            </div>
         </FullBleedContainer>
      </div>
   )
}
