import PageHero from "@/components/shared/PageHero"
import Card from "@/components/shared/Card"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function FAQ() {
   const cards = [
      {
         question: "How long does the cleanup last?",
         answer: "1 hour",
         lineBreak: false,
      },
      {
         question: "How often do you go?",
         answer:
            "Depends on the location, but Woodland Hills, Canoga Park and West Hills are daily.",
         lineBreak: false,
      },
      {
         question: "What should I wear to clean up?",
         answer: "Bright colors and closed toe shoes.",
         lineBreak: false,
      },
      {
         question: "Where do you host cleanups?",
         answer:
            "Right now, we host cleanups in the following locations: \n📍 Canoga Park, CA  \n📍 West Hills, CA \n📍 Woodland hills, CA\n 📍 Cleveland, OH\n  📍 Greater Seattle Area, WA",
         lineBreak: true,
      },
      {
         question: "Where do you dispose of garbage bags?",
         answer:
            "We have discussed this with the city of Los Angeles and agreed to leave our garbage bags by the city trash cans, then report it on the 311 app to get them collected. When we have a large number of bags, especially on weekends, we use the city's dumpster or we call the sanitation department to get them collected.\nAs we expand to new hubs across the United States, please check with your local cleanup leaders if you have any questions regarding trash disposal.",

         lineBreak: true,
      },
      {
         question: "How can I sign up?",
         answer:
            "You can sign up for our newsletter to receive email updates for our schedules. You can choose from daily, weekly, monthly updates.",
         lineBreak: false,
      },
      {
         question: "Do I need to bring anything?",
         answer: "Please bring your gloves and grabbers.",
         lineBreak: false,
      },
      {
         question: "Can I bring friends or family?",
         answer:
            "Absolutely! The more people, the better the team! We welcome anybody you can bring.",
         lineBreak: false,
      },
      {
         question:
            "I want to host regular cleanups in my neighborhood. What should I do?",
         answer:
            "We are always on a lookout for great community leaders who want to make their community better. Be a leader to make a great impact in your community🎊 Contact us at hello@itisoverdue.com. We will help you set up a cleanup in your neighborhood!",
         lineBreak: false,
      },
      {
         question: "Is it dog friendly?",
         answer:
            "Yes! We have a lot of Pawlunteers so come join us with your furry children.",
         lineBreak: false,
      },
   ]

   const renderAnswer = (answer) => {
      return (
         <p className="md:text-lg">
            {answer.split("\n").map((t, key) => {
               return (
                  <span key={key} className="block">
                     {t}
                  </span>
               )
            })}
         </p>
      )
   }
   return (
      <div>
         <PageHero
            route="faq"
            header="FAQ"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441391/backgrounds/faq_z3arfk.jpg"
         />

         <FullBleedContainer
            sx="bg-background dark:bg-darkest-grey"
            childSx="py-20 lg:py-32"
         >
            <div className="columns-1 md:columns-2 md:gap-8 lg:gap-10">
               {cards.map((item) => (
                  <Card
                     key={item.question}
                     sx={`flex flex-col space-y-4 p-6 md:p-8 lg:p-10 border mb-8 lg:mb-10 shadow-lg w-full h-auto overflow-hidden even:bg-darker-grey even:text-white`}
                  >
                     <span className="text-4xl font-black text-primary md:text-5xl">
                        Q.
                     </span>
                     <p className="text-2xl font-bold lg:text-3xl">
                        {item.question}
                     </p>
                     {item.lineBreak ? (
                        renderAnswer(item.answer)
                     ) : (
                        <p className="lg:text-lg">{item.answer}</p>
                     )}
                  </Card>
               ))}
            </div>
         </FullBleedContainer>
      </div>
   )
}
