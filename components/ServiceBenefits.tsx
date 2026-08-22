import Reveal from '@/components/Reveal';

type Benefit = {
  title: string;
  description: string;
};

type ServiceBenefitsProps = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: Benefit[];
};

export default function ServiceBenefits({
  eyebrow,
  title,
  description,
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="bg-white py-20 md:py-24">

      <div
        className="
          mx-auto
          max-w-[1584px]
          px-6
          md:px-16
          lg:px-24
        "
      >

        <Reveal>

          <div className="mx-auto mb-14 max-w-3xl text-center">

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
                md:text-lg
              "
            >
              {description}
            </p>

          </div>

        </Reveal>


        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >

          {benefits.map((benefit, index) => (

            <Reveal
              key={benefit.title}
              delay={index * 150}
            >

              <article
                className="
                  h-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-[#FAFAFA]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  md:p-8
                "
              >

                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-[0.2em]
                    text-[#B9945E]
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>


                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-black
                    md:text-2xl
                  "
                >
                  {benefit.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-gray-600
                    md:text-base
                  "
                >
                  {benefit.description}
                </p>

              </article>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}