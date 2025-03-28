import { useState } from "react";
import FAQ from "../src/api/faq.json";
import { useEffect } from "react";
import { Faq } from "./UI/Faq";
export const Accordion = () => {
  const [faqData, setFaqData] = useState([]);
  const [isFaqClicked, setFaqClicked] = useState(false);

  const handleClick=(id)=>{
    setFaqClicked((prev)=>(prev===id?false :id))
}

  useEffect(() => {
    setFaqData(FAQ);
  }, []);
  return (
    // ==============
    // FAQ 
    // ========
    <section className="sm:p-[3rem] p-[2rem] md:p-[5rem]">
      <div className="2xl:w-7xl xl:w-5xl lg:w-4xl md:w-2xl sm:w-lg flex flex-col gap-[0.8rem] m-auto sm:gap-[1.5rem]">
        <h2 className="text-yellow-100 text-2xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        <ul className="flex flex-col items-center justify-center gap-[0.5rem] w-[100%] sm:gap-[1rem]">
          {faqData.map((currFaq) => {
            return (
              <Faq key={currFaq.id} 
              currFaq={currFaq}
              isActive={isFaqClicked===currFaq.id}
              handleFaqClick={()=>handleClick(currFaq.id)}  />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
