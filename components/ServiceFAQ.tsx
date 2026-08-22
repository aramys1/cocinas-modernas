import Reveal from '@/components/Reveal';

export type FAQItem = {
  question: string;
  answer: string;
};

type ServiceFAQProps = {
  eyebrow: string;
  title: string;
  description: string;
  faqs: FAQItem[];
};

export default function ServiceFAQ({
  eyebrow,
  title,
  description,
  faqs,
}: ServiceFAQProps) {
  return (
    <section className="bg-white py-20 md:py-24">

      <div
        className="
          mx-auto
          max-w-[1100px]
          px-6
          md:px-12
        "
      >

        <Reveal>

          <div className="mb-12 text-center">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#B9945E]
              "
            >
              {eyebrow}
            </p>


            <h2
              className="
                text-3xl
                font-semibold
                leading-tight
                text-black
                md:text-5xl
              "
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              {title}
            </h2>


            <div
              className="
                mx-auto
                mt-6
                h-[2px]
                w-20
                bg-[#D9B37A]
              "
            />


            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-relaxed
                text-gray-600
              "
            >
              {description}
            </p>

          </div>

        </Reveal>


        <div className="divide-y divide-gray-200 border-y border-gray-200">

          {faqs.map((faq, index) => (

            <Reveal
              key={faq.question}
              delay={index * 100}
            >

              <details className="group">

                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-lg
                    font-semibold
                    text-black
                    md:text-xl
                  "
                >
                  {faq.question}

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-300
                      text-lg
                      font-normal
                      transition-transform
                      duration-300
                      group-open:rotate-45
                    "
                  >
                    +
                  </span>

                </summary>


                <p
                  className="
                    max-w-3xl
                    pb-6
                    pr-10
                    leading-relaxed
                    text-gray-600
                  "
                >
                  {faq.answer}
                </p>

              </details>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}