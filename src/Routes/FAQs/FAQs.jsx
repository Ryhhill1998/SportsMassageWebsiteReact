import "./FAQs.css";

import Question from "../../Components/Question/Question.component";

const questions = [
    {
        questionText: "Who can have acupuncture treatment?",
        answerText: `There is no limitation in terms of age, sex or condition regarding acupuncture treatment. The very 
        young or extremely old can be treated. All types of conditions can be treated – chronic or acute, severe or 
        mild, mental or physical.`
    },
    {
        questionText: "Can children have acupuncture treatment?",
        answerText: `Yes. All ages of people can safely and effectively have treatment. Children can attend the 
        acupuncture clinic with their parent or guardian.`
    },
    {
        questionText: "Does acupuncture treatment hurt?",
        answerText: `Acupuncture does not hurt. Acupuncture needles are extremely fine, almost like a hair, and it is 
        sometimes hard to even feel them being inserted. Often people report a sensation sometime after the insertion 
        of the needle, but this is a pressure-like sensation rather than a pain.`
    },
    {
        questionText: "Is acupuncture treatment safe?",
        answerText: `In the hands of a professionally trained practitioner, acupuncture is safe. Acupuncture needles 
        are pre-sterilised, single use needles. They are safe and painless to use, and safely discarded after the 
        treatment.`
    },
    {
        questionText: "What if I’m afraid of needles?",
        answerText: `The needles used are hair thin and totally unlike the needles used for injections of medicine. 
        Most people don’t even feel the insertion and those who do, describe it as a kind of pressure. There is no 
        need to be afraid of the needles. If you are worried, however, mention this when you make your appointment, or 
        at your first appointment so your practitioner can take it into account and make things easier for you.`
    }
]

const FAQs = () => {
    return (
        <main className="container">
            <div className="faqs-container">
                {questions.map(question => (
                    <Question {...question} />
                ))}
            </div>
        </main>
    );
}

export default FAQs;