import PageHeader from "@/app/components/page-header";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "@/app/components/styles/Tabs.module.css";

export default function Page() {
  return (
    <div>
      <PageHeader bg="#fff">
        <div className="text-6xl absolute bottom-1 font-bold">
          It's Germany!
        </div>
      </PageHeader>
      <div className="p-30 flex flex-col gap-6">
        <div>
          <div className="grid grid-cols-3 gap-10 items-center pb-6">
            <h1 className="text-4xl font-bold col-span-2">
              Let's Go On A Journey And Find Your Dream University
            </h1>
            <button
              type="button"
              className="w-80 h-10 text-white p-2 rounded-sm bg-orange-500  hover:bg-orange-600"
            >
              Get Free Assistance From Our Experts
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              If you are thinking about studying in Germany, don’t think twice.
              It is a super study overseas vacation spot for international
              students.
            </p>

            <p>
              They are hundreds of universities in Germany some are free or
              low-payment tuition programs. Whether you wish to research
              Engineering, Architecture, Medicine, Business study or management
              then Germany is the place to be. Combining high-quality schooling
              with a novel cultural experience living in Germany and the value
              of living in is affordable, averaging around including hire, food,
              transport, health insurance, phone/web, research materials, and
              leisure activities. Speaking German is sort of at all times a
              prerequisite especially for entry-degree jobs.
            </p>

            <p>
              Studying in Germany for students all over the globe has always
              been a great prospect. As many universities supply programs in
              Mechanical, Civil, Computer Science, Electrical and Aerospace,
              Naval, Automotive Engineering, and many more. With so many options
              around to choose from an Engineering aspirant around the globe.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold pb-6">
            Universities and Colleges in Germany
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              Germany nearly has 400 officially recognised universities with
              over 15000 study programmes to choose from.
            </p>

            <p>
              In Germany, higher education institutions are referred to as
              Hochschule. This term covers:
            </p>

            <p className="font-bold">
              Universities (Universitäten) – where there is a strong research
              element
            </p>
            <p className="font-bold">
              Technical universities – strong focus on engineering and
              technology courses
            </p>
            <p className="font-bold">
              Colleges of art, film and music – these require special admission,
              usually via an entrance examination
            </p>
            <p className="font-bold">
              Universities of applied sciences – for students who prefer a
              practical approach to study
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold pb-6">
            List of Universities in Germany
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              Many top Universities in Germany offer programs that are taught in
              English language completely. Thus, doing a German certificate is
              not essential. However we suggest all our students to do at least
              an A1 level German language course. This helps in networking with
              others and get adjusted to the environment. Additionally, when you
              are looking for employment after finishing your MBA in Germany, we
              are certain that employers would love to know that you know their
              language and will be a good team member
            </p>
            <div className="grid grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center  rounded-md h-40 bg-orange-100">
                <p className="text-5xl font-black">400+</p>
                <p className="font-light">UNIVERSITIES</p>
              </div>
              <div className="flex flex-col justify-center items-center  rounded-md h-40 bg-fuchsia-100">
                <p className="text-5xl font-black">200+</p>
                <p className="font-light">COURSES</p>
              </div>
              <div className="flex flex-col justify-center items-center  rounded-md h-40 bg-teal-50">
                <p className="text-5xl font-black">3M</p>
                <p className="font-light">Over 3 Million Students</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <Tabs.Root
            className={styles.Root}
            defaultValue="tab1"
            orientation="vertical"
          >
            <Tabs.List className={styles.List} aria-label="tabs">
              <Tabs.Trigger className={styles.Trigger} value="tab1">
                Why Study in The Germany?
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.Trigger} value="tab2">
                Living in the Germany
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.Trigger} value="tab3">
                Education System in Germany
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.Trigger} value="tab4">
                Top courses to study in Germany
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.Trigger} value="tab5">
                Career opportunities in Germany
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.Trigger} value="tab6">
                Visa process in Germany
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.Trigger} value="tab7">
                Quick Facts
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className={styles.Content} value="tab1">
              <div>
                <h1 className="text-3xl font-bold py-4">
                  Top reasons why students choose to study in Germany:
                </h1>
                <div className="flex flex-col gap-6">
                  <p>
                    <span className="font-bold">Affordable Tuition Fees:</span>{" "}
                    Studying in Germany is best where students are benefited
                    from free and paid university in addition you can also do it
                    in English if your German language skills are not so good.
                    German public universities offer free tuition fees and
                    Private universities charge tuition fees, but they are
                    significantly lower than in other countries like the United
                    States or the United Kingdom.
                  </p>

                  <p>
                    <span className="font-bold">Wide Range of Programs:</span>{" "}
                    German university offers a wide range of courses which could
                    be your first step towards a career in Germany. Because
                    German companies are looking for graduates with practical
                    and adaptive skills in a variety of sectors, especially in
                    the fields of engineering, life sciences, medicine,
                    marketing, business management, natural sciences, social
                    sciences, humanities, information technology and many more
                    courses.
                  </p>

                  <p>
                    <span className="font-bold">High-Quality Education:</span>{" "}
                    Germany has a long tradition of providing high-quality
                    education. Its universities are renowned worldwide for their
                    academic excellence, research facilities, and innovative
                    teaching methods. Universities in Germany focus mainly on
                    technology, engineering valuing and real-time scenarios not
                    only the art of theory but also the art of practice are
                    emphasised in institutions.
                  </p>

                  <p>
                    <span className="font-bold">Job Opportunities:</span>{" "}
                    Germany has a strong economy and plenty of job opportunities
                    available for graduates. German companies are known for
                    their commitment to research and development, which means
                    there is a high demand for skilled professionals. German
                    companies are looking for university graduates in a variety
                    of sectors, especially in the fields of engineering,
                    medicine, the life sciences, information technology and many
                    more
                  </p>

                  <p>
                    <span className="font-bold">
                      International Environment:
                    </span>{" "}
                    Germany is a cosmopolitan country with a diverse population.
                    Studying in Germany provides an opportunity to interact with
                    people from different cultural backgrounds and develop a
                    global perspective.
                  </p>

                  <p>
                    <span className="font-bold">
                      Student-Friendly Environment:
                    </span>{" "}
                    Student life in Germany thrives on adrenaline and curiosity
                    because German universities are known for their
                    student-friendly environment. The campuses are well-equipped
                    with modern facilities and offer various extracurricular
                    activities.
                  </p>

                  <p>
                    <span className="font-bold">Lifestyle:</span> Germany is a
                    very safe country, with a rich cultural history and a very
                    diverse population. German people are friendly but give you
                    privacy and mutual respect. Cultural diversity in Germany is
                    worth exploring every inch, as it makes you feel part of one
                    entity rather than a total stranger.
                  </p>

                  <p>
                    <span className="font-bold">Travel Opportunities:</span>{" "}
                    Germany is located in the heart of Europe, and it is easy to
                    travel to other European countries. This makes it an ideal
                    location for students who want to explore Europe while
                    studying.
                  </p>

                  <p>
                    Overall, studying in Germany is a great opportunity for
                    students who want to receive a high-quality education,
                    develop their skills, and experience a new culture. Finally,
                    after completing study in Germany, you will have the chance
                    to stay back and search job after you graduate. The
                    government law allows international graduates to stay for an
                    additional 18 months to search job and you may even end up
                    staying longer if that is what you wish.
                  </p>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.Content} value="tab2">
              <div>
                <h1 className="text-3xl font-bold py-4">
                  Living in Germany as a student can be an exciting and
                  enriching experience.
                </h1>
                <div className="flex flex-col gap-6">
                  <p>
                    Firstly, as an international student, you will need to
                    obtain a visa to study in Germany. You can do this by
                    contacting the German embassy or consulate in your home
                    country.
                  </p>

                  <p>
                    When it comes to accommodation, many universities offer
                    student housing options, but you can also explore private
                    rentals through websites like WG-Gesucht or
                    ImmobilienScout24. Keep in mind that rental prices can vary
                    greatly depending on the city and location.
                  </p>

                  <p>
                    In terms of transportation, Germany has an extensive public
                    transportation system that includes trains, buses, trams,
                    and subways. Many universities also have bike-sharing
                    programs, which can be a convenient and eco-friendly way to
                    get around.
                  </p>

                  <p>
                    Germany has a rich culture and history, so be sure to take
                    advantage of your time there to explore museums, historical
                    sites, and cultural events. Many cities also have vibrant
                    nightlife scenes, with plenty of bars, clubs, and music
                    venues to explore.
                  </p>

                  <p>
                    Finally, learning German can greatly enhance your experience
                    in Germany, so consider taking language classes or
                    practising with native speakers. Many universities offer
                    language courses for international students, and there are
                    also online resources available.
                  </p>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content className={styles.Content} value="tab3">
              <div>
                <div className="flex flex-col gap-6">
                  <p>
                    The education system in Germany is highly regarded around
                    the world for its quality and comprehensive approach to
                    learning. The system is organized in a way that provides
                    students with a wide range of opportunities for academic and
                    personal growth.
                  </p>

                  <p>
                    The German education system is divided into three main
                    levels: primary, secondary, and tertiary education. Primary
                    education, also known as Grundschule, begins at age six and
                    lasts for four years. Students learn a range of subjects,
                    including mathematics, German, social studies, and music.
                    After completing primary education, students move on to one
                    of several secondary schools, depending on their academic
                    abilities and interests.
                  </p>

                  <p>
                    The three types of secondary schools in Germany are
                    Hauptschule, Realschule, and Gymnasium. Hauptschule focuses
                    on practical skills and prepares students for vocational
                    training or apprenticeships. Realschule provides more
                    general education and prepares students for a range of
                    technical or administrative jobs. The gymnasium is the most
                    academically demanding type of secondary school and prepares
                    students for university education.
                  </p>

                  <p>
                    The German tertiary education system is divided into
                    universities, universities of applied sciences, and colleges
                    of art, film, and music. Admission to universities is based
                    on academic performance, while universities of applied
                    sciences and colleges of art, film, and music require
                    additional tests or auditions.
                  </p>

                  <p>
                    Overall, the education system in Germany is designed to
                    provide students with a solid foundation in a range of
                    subjects and to prepare them for success in their chosen
                    career path. The system places a strong emphasis on academic
                    achievement but also recognizes the importance of practical
                    skills and vocational training.
                  </p>

                  <p>
                    The education system in Germany is highly regarded globally
                    and attracts thousands of international students every year.
                    Here's a brief overview of the entry criteria, visa process,
                    test requirements, and accommodation options for students
                    looking to pursue their studies in Germany:
                  </p>

                  <p>
                    <span className="font-bold text-lg block">
                      Entry Criteria:
                    </span>
                    To be eligible for higher education in Germany, students
                    must have a high school diploma or equivalent qualification
                    that is recognized by German universities. Some programs may
                    have additional admission requirements, such as language
                    proficiency, entrance exams, or interviews.
                  </p>

                  <p>
                    <span className="font-bold text-lg block">
                      Visa Process:
                    </span>
                    Students from non-European Union (EU) countries must obtain
                    a student visa to study in Germany. The visa application
                    process varies depending on the country of origin, but
                    generally requires proof of acceptance to a German
                    university, financial resources to cover living expenses,
                    and health insurance coverage. The visa process can take
                    several months, so students are advised to apply well in
                    advance.
                  </p>

                  <p>
                    <span className="font-bold text-lg block">
                      Test Required:
                    </span>
                    Most universities in Germany require students to demonstrate
                    proficiency in German or English, depending on the language
                    of instruction of the chosen program. International students
                    may be required to take language proficiency tests, such as
                    the Test of German as a Foreign Language (TestDaF) or the
                    International English Language Testing System (IELTS).
                  </p>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content className={styles.Content} value="tab4">
              <div>
                <h1 className="text-3xl font-bold py-4">
                  Universities and Colleges in Germany
                </h1>
                <div className="flex flex-col gap-6">
                  <p>
                    In Germany, higher education is largely free, and there are
                    a wide variety of universities and colleges to choose from.
                    Here is some basic information about universities and
                    colleges in Germany
                  </p>

                  <p>
                    Types of Universities and Colleges: There are different
                    types of universities and colleges in Germany, including
                    public universities, private universities, technical
                    universities, universities of applied sciences
                    (Fachhochschulen), and art colleges.
                  </p>

                  <p>
                    Admission Requirements: Admission requirements vary
                    depending on the university and degree program. Generally,
                    international students are required to have a high school
                    diploma or equivalent and must provide proof of their
                    proficiency in the German language.
                  </p>

                  <p>
                    Tuition Fees: Public universities in Germany do not charge
                    tuition fees for undergraduate programs, and tuition fees
                    for graduate programs are relatively low. Private
                    universities charge tuition fees, which can be quite high.
                  </p>

                  <p>
                    Language of Instruction: Most universities in Germany offer
                    programs in German, and students are typically required to
                    have a certain level of proficiency in the language.
                    However, there are also many programs offered in English,
                    especially at the graduate level.
                  </p>

                  <p>
                    Ranking of German Universities: There are several ranking
                    systems that rank German universities based on various
                    criteria such as research output, academic reputation, and
                    student satisfaction. Some of the top-ranked universities in
                    Germany include the Technical University of Munich, the
                    University of Heidelberg, and the University of Freiburg.
                  </p>

                  <p>
                    International Student Support: Most universities in Germany
                    offer support services for international students, including
                    language courses, orientation programs, and assistance with
                    visa and immigration issues.
                  </p>

                  <p>
                    Overall, Germany is a great place to study for international
                    students who want to experience high-quality education and
                    cultural diversity.
                  </p>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content className={styles.Content} value="tab5">
              <div>
                <h1 className="text-3xl font-bold py-4">
                  Some of the top industries/sectors in Germany are
                </h1>
                <div className="flex flex-col gap-6">
                  <p>
                    Automotive: Germany is home to some of the world's leading
                    automotive companies such as Volkswagen, BMW, and
                    Mercedes-Benz.
                  </p>
                  <p>
                    Engineering: Germany is known for its high-quality
                    engineering products and has a strong reputation for
                    precision manufacturing.
                  </p>
                  <p>
                    Healthcare: The German healthcare system is one of the best
                    in the world, and the country is a leader in medical
                    research and innovation.
                  </p>
                  <p>
                    IT: Germany has a thriving IT sector, and companies like
                    SAP, Deutsche Telekom, and Siemens are leading the way in
                    this field.
                  </p>
                  <p>
                    Information Technology: Germany is one of the leading tech
                    industries, in the top fields like artificial intelligence,
                    cybersecurity, software development and many more.
                  </p>
                  <p>
                    Engineering: Germany is known for its engineering prowess,
                    and there is a high demand for professionals in fields such
                    as mechanical, electrical, and civil engineering.
                  </p>
                  <p>
                    Healthcare: The healthcare sector in Germany is growing,
                    with a particular emphasis on nursing and geriatric care.
                  </p>
                  <p>
                    Finance: Germany is home to many international banks, and
                    there is a strong demand for finance professionals,
                    particularly in areas such as risk management and investment
                    banking.
                  </p>
                  <p>
                    Automotive industry: Germany is the home of some of the
                    world's leading automotive companies such as Volkswagen,
                    BMW, and Mercedes-Benz. Job opportunities in the field of
                    automotive engineering, manufacturing, and marketing are
                    more compared to other countries.
                  </p>
                  <p>
                    Renewable Energy: Germany is committed to transitioning to
                    renewable energy sources, and there is a high demand for
                    professionals in fields such as wind and solar energy.</p>
                    <p>
                      Education: Germany has a well-developed education system,
                      and there is a demand for teachers and professors in a
                      range of subjects. Logistics and Supply Chain Management:
                      Germany is a hub for international trade and logistics,
                      making careers in supply chain management and logistics
                      particularly attractive.
                    </p>
                    <p>
                      Creative industries: Germany has a thriving arts and
                      culture scene, and there are opportunities for
                      professionals in fields such as design, advertising, and
                      marketing.
                    </p>
                    <p>
                      Tourism and Hospitality: Germany is a popular tourist
                      destination, and there are many opportunities for
                      professionals in the hospitality and tourism industries.
                    </p>
                    <p>
                      Renewable Energy: Germany is a leader in renewable energy,
                      and the country has set ambitious targets to become carbon
                      neutral by 2050.
                    </p>
                    <p>
                      In terms of the future of careers in Germany, there are
                      several trends to watch out for. evolution in
                      digitalization there will be a growing demand for
                      professionals with skills in fields such as data science,
                      AI, Big Data, cybersecurity and many more course.
                      Additionally, as the country ages, there will be a need
                      for more healthcare professionals, particularly in the
                      fields of geriatrics and nursing.
                    </p>
                    <p>Overall, Germany offers a wealth of career
                    opportunities, and the country's strong economy and
                    commitment to innovation make it an exciting place to work
                    and build a career.
                  </p>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content className={styles.Content} value="tab6">
              <div>
                <div className="flex flex-col gap-6">
                  <p>
                    If you're planning to study in Germany, you'll need to
                    obtain a study visa to legally reside in the country for the
                    duration of your studies. Here are the general requirements
                    for obtaining a study visa in Germany:
                  </p>

                  <p>
                    An acceptance letter from a German university: You'll need
                    to provide proof of acceptance from a German university or
                    other accredited educational institution.
                  </p>

                  <p>
                    <span className="font-bold">Sufficient funds: </span>One must have enough financial support
                    during your stay in Germany. This typically means having at
                    least €9,000 to €11000 per year in your bank account or in
                    the form of a scholarship.
                  </p>

                  <p>
                    <span className="font-bold">Health insurance: </span>You'll need to obtain health insurance
                    coverage that meets the requirements of the German
                    government.
                  </p>

                  <p>
                    <span className="font-bold">Language proficiency: </span>Depending on the language of
                    instruction of your chosen course, you may be required to
                    provide proof of language proficiency in German or English.
                  </p>

                  <p>
                    <span className="font-bold">Application form: </span>You'll need to fill out an application
                    form and submit it to the German embassy or consulate in
                    your home country.
                  </p>

                  <p>
                    <span className="font-bold">Passport: </span>One should need a valid passport, which should be
                    valid for the duration of your stay in Germany.
                  </p>

                  <p>
                    <span className="font-bold">Background check: </span>You may require a background check to
                    prove that you have no criminal record.
                  </p>

                  <p><span className="font-bold">Fees: </span>You need to pay the visa processing fees.</p>

                  <p>
                    Apart from these general requirements, there will be a few
                    specific requirements depending on the country of origin and
                    the German institution you plan to attend. Check with the
                    German embassy in your country for the latest update on the
                    visa requirements.
                  </p>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content className={styles.Content} value="tab7">
              <div>
                <h1 className="text-3xl font-bold py-4">
                  Top reasons why students choose to study in Germany:
                </h1>
                <div className="flex flex-col gap-6"></div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}
