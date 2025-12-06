import AccordionItem from "@/app/components/accordion-item";
import CircleBox from "@/app/components/circle-box";
import PageHeader from "@/app/components/page-header";
import * as Accordion from "@radix-ui/react-accordion";

export default function Page() {
  return (
    <div>
      <PageHeader>
        <div className="text-6xl absolute bottom-1 font-bold z-9">FAQ</div>
      <CircleBox/>
      </PageHeader>
      <div className="relative bg-white">
      <div className="text-center pt-20">
        <p className="text-4xl font-bold py-6">Frequently Asked Questions</p>
        <p>We can tell you everything about studying abroad</p>
      </div>
      <div className="flex p-30">
        <div className="w-1/2">
          <div>
            <p className="font-bold text-2xl py-6">Study Application</p>
            <Accordion.Root
              type="single"
              collapsible
              className="w-full max-w-xl space-y-2"
            >
              <AccordionItem
                value="item-1"
                title="How do I apply for a foreign first university degree?"
              >
                <div className="flex flex-col gap-5">
                  <p>
                    With a foreign university degree, you need to apply via
                    uni-assist. Uni-assist will check and verify your
                    application and documents. If everything is ok, they will
                    forward your application to the university, where the
                    examination board will decide upon your admission. This
                    process will take some time, so please make sure to apply
                    within due time.
                  </p>
                  <p>
                    Please find more information about the admission
                    requirements, application process and needed documents in
                    our uni-assist application guideline. In addition, please
                    check the application flow chart for more information on the
                    process. If you have any further questions, please do not
                    hesitate to contact us!
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                title="How do I apply with a german first university degree?"
              >
                <div className="flex flex-col gap-5">
                  <p>
                    With a german first university degree, you apply via mine.
                    h-da, the application portal of the university. Please
                    register yourself in my. h-da first. You can apply for the
                    MBA program as soon as you have registered yourself
                    sucesfully.
                  </p>
                  <p>
                    For more information on the admission requirements and the
                    needed documents, please check our h-da application guide.
                    If you have any further questions, please do not hesitate to
                    contact us!
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                title="Whom do I contact, if I need help?"
              >
                <div className="flex flex-col gap-5">
                  <p>
                    If you have any questions, please do not hesitate to get in
                    contact with the MBA team. We will be happy to help you!
                  </p>
                  <p>
                    Once you have successfully applied and got admission to one
                    of the MBA programs, our buddy service will be there to help
                    you with the preparations of your transition and getting
                    started in Germany.
                  </p>
                </div>
              </AccordionItem>
            </Accordion.Root>
          </div>
          <div>
            <p className="font-bold text-2xl py-6">Accommodation</p>
            <Accordion.Root
              type="single"
              collapsible
              className="w-full max-w-xl space-y-2"
            >
              <AccordionItem
                value="item-1"
                title="What do I need to know about renting in Germany?"
              >
                <div className="flex flex-col gap-5">
                  <p>
                    In Germany there are several different possibilities to find
                    appropriate accommodation as a student. Unlike other
                    countries, Germany does not automatically assign rooms to
                    students when they enrol. Most likely you will have to find
                    a place to live on your own.
                  </p>

                  <p>
                    Renting a flat, apartment or residence hall in Germany may
                    appear a bit confusing at first glance, but knowing what you
                    need and what to consider will help you to find an
                    appropriate accommodation. One way to make the move to
                    Germany easier is to look for an accommodation well in
                    advance, ideally before moving to Germany since demand is
                    highest at the beginning of the semester.
                  </p>

                  <p>
                    The first step to narrowing down your search is to decide
                    how you want to live in Germany. Are you looking for a
                    student residence, or a shared flat or do you want to live
                    in your own apartment? Each form of living has its
                    advantages and disadvantages and affects the renting price.
                  </p>

                  <p>
                    In most cases, a room or apartment in a student residence is
                    the cheapest option. Since the there is only a limited
                    number of rooms in student residences, you may also consider
                    other options such as private flat shares or living in a
                    single apartment.
                  </p>

                  <p>
                    The following sections provide you with the information
                    needed to make an informed decision on which form of living
                    as a student suits you best.
                  </p>
                </div>
              </AccordionItem>
            </Accordion.Root>
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-bold text-2xl py-6">Visa Application</p>
          <Accordion.Root
            type="single"
            collapsible
            className="w-full max-w-xl space-y-2"
          >
            <AccordionItem value="item-1" title="Do I need a visa?">
              <div className="flex flex-col gap-5">
                <p>
                  As a student from abroad, you may need a visa to study in
                  Germany depending on how long you plan to stay and where you
                  come from. In general, citizens of the European Union, the
                  European Economic Area, Switzerland, or foreigners who already
                  hold a temporary residence permit as a student issued by
                  another EU-country are exempted from the procedure of applying
                  for a visa.
                </p>

                <p>
                  Furthermore, there is a list of Countries outside the EU and
                  EEA whose citizens are not required to apply for a visa
                  either.
                </p>

                <p>
                  These include Andorra, Australia, Brazil, Canada, El Salvador,
                  Honduras, Israel, Japan, Monaco, San Marino, South Korea and
                  the USA (last updated May 2019).
                </p>

                <p>
                  For more information on whether or not you need a visa, please
                  have a look at the respective guideline by the German Academic
                  Exchange Service.
                </p>

                <p>
                  Note for applicants with degrees from China, Vietnam and
                  India:
                </p>

                <p>
                  Since November 2022, all applicants with a degree from China,
                  Vietnam or India must present an APS certificate when applying
                  to a German university and for obtaining a German visa. You
                  can receive the APS certificate by applying for it at the
                  German embassy in your home country. Please note that this may
                  take some time, so you should start the process as soon as
                  possible.
                </p>

                <p>
                  For more information on the APS certificate, you can visit the
                  uni-assist website
                </p>

                <p>
                  (https://www.uni-assist.de/en/tools/glossary-of-terms/description/details/akademische-pruefstelle-aps/).
                </p>

                <p>
                  <span>{`a)`}</span>A visa is your permission to enter Germany.
                  You need to apply for it at the responsible embassy/consulate
                  in your country of origin. It is normally valid for 90 days.
                  Some countries have special agreements with Germany to waive
                  the visa requirement. Please find more information about visa
                  types and the application process in the next sections.
                </p>

                <p>
                  <span>{`b)`}</span> Residence permit If you would like to stay
                  in Germany for longer than 90 days to study at a German
                  university, you either need to register yourself or apply for
                  a German residence permit (Aufenthaltstitel) after arrival,
                  depending on whether you need a visa to enter Germany or not.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              title="How do I apply with a german first university degree?"
            >
              <div className="flex flex-col gap-5">
                <p>
                  There are two types of visa that allow you to start your
                  studies in Germany. First of all, you can apply for a student
                  visa as soon as you received a letter of admission from the
                  university. A student visa allows you to study at the
                  university of which you bring the admission letter to the visa
                  appointment. It is valid for three months after the start of
                  your studies and will be converted into a student residence
                  permit after your arrival in Germany.
                </p>

                <p>
                  Secondly, some countries offer the possibility to apply for a
                  student application visa. This might be helpful if you are
                  still waiting for acceptance at the university, but you need
                  to apply for a visa soon to make sure you get everything ready
                  before the start of studies. This visa is initially valid for
                  three months to give you time and the opportunity to meet the
                  requirements needed for admission to a German university. If
                  you need more time, it is possible to extend the prospective
                  student visa by up to six months. After being admitted to a
                  University or another higher education institution in this
                  timespan, you can apply for a student residence permit. Please
                  note that an application to a university is necessary to apply
                  for this type of visa and that student application visa aren’t
                  offered in all countries.
                </p>

                <p>
                  A tourist visa, business visa, etc. is not sufficient and it’s
                  not possible to convert them into a student visa after
                  arriving in Germany!
                </p>
              </div>
            </AccordionItem>

            <AccordionItem value="item-3" title="How do I apply for a visa?">
              <div className="flex flex-col gap-5">
                <p>
                  In general, you have to submit your visa application together
                  with all necessary documents in person at the German embassy
                  or consulate responsible for your place of residence. You can
                  find the addresses of all German diplomatic missions on the
                  website of the German Federal Foreign Office.
                </p>

                <p>
                  https://www.auswaertiges-amt.de/en/aamt/auslandsvertretungen
                </p>

                <p>
                  For detailed information, applicants should consult the
                  website of the respective embassy well in advance of their
                  departure date in order to find out about the visa procedure
                  and the documents needed for your application. Please make
                  sure to inform yourself as early as possible, as visa
                  processes can take several months.
                </p>

                <p>
                  Visa application forms can be obtained from your respective
                  embassy free of charge or can be found as PDF on the German
                  foreign office’s website. Please keep in mind that the
                  submitted documents must be original versions in the native
                  language of your respective embassy.
                </p>

                <p>
                  When applying for a student visa, you will have to present
                  your letter of admission, as well as proof of sufficient funds
                  to pay for your studies and your living expenses in Germany.
                  If you have not received your confirmation or notification of
                  admission to a university yet, you should apply for a student
                  application visa (“Visum zur Studienbewerbung”).
                </p>

                <p>
                  As a rule, there is a number of steps you have to follow to
                  apply for your visa, regardless of which type of visa you may
                  apply for. These steps include:
                </p>

                <p>
                  Ask your respective German consulate for a checklist of the
                  required documents for the type of visa you want to apply for
                </p>

                <p>
                  Fill in the application form and obtain all the required
                  (verified) documents Make an appointment at the respective
                  German diplomatic mission in your country of residence.
                </p>

                <p>
                  Pay the visa fee and keep your receipt for your appointment
                </p>

                <p>
                  Be on time for your appointment and bring all the required
                  documents.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              title="When do I need to apply for a visa?"
            >
              <div className="flex flex-col gap-5">
                <p>
                  If you need a visa, you have to apply for it at the German
                  diplomatic representation (embassy or consulate) in your home
                  country before coming to Germany. Visa processes can take
                  several months , so please make sure that you apply for an
                  appointment in your respective diplomatic mission well in
                  advance.
                </p>

                <p>
                  If you apply for a student visa, you need to wait for the
                  admission letter of the university before you can apply for
                  the visa appointment. The admission process via Uni-Assist can
                  take up to 8 weeks. Therefore, please make sure, that you
                  apply for the program of study at least 8 weeks before you
                  intend to apply for the visa appointment.
                </p>

                <p>
                  If you apply for a student application visa, you can apply as
                  soon as you applied for a program of study in Germany. You
                  will only need a document showing for which program and which
                  university you applied. Please note, that not all countries
                  offer a student application visa for Germany.
                </p>

                <p>
                  Please note: A tourist visa, business visa, etc. is not
                  sufficient and it’s not possible to convert them into a
                  student residence permit after arriving in Germany. Commencing
                  your studies without a student residence permit is not
                  allowed.
                </p>
              </div>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              title="Which documents do I need to bring for the visa appointment?"
            >
              <div className="flex flex-col gap-5">
                <p>
                  Depending on where you come from, the extent of documents you
                  have to include in your visa application may vary. Please make
                  sure to check the information on the homepage of the
                  responsible German diplomatic mission in your country of
                  residence in advance!
                </p>

                <p>
                  In general, the required documents for your application
                  include:
                </p>

                <p>
                  Visa application Form (in the appropriate language of the
                  respective mission)
                </p>
                <p>
                  Valid passport (issued within the last 10 years and with at
                  least 12 months validity left after the scheduled return)
                </p>
                <p>1 copy of your passport’s data page (A4 size copy)</p>
                <p>3 passport pictures according to biometric specifications</p>
                <p>
                  Cover letter from the applicant explaining the exact purpose
                  and duration of stay
                </p>
                <p>
                  Letter of admission from a German university (electronic
                  version) (for a student visa)
                </p>
                <p>
                  Proof of application to a Study Program in Germany (for a
                  student application visa)
                </p>
                <p>Proof of payment of study fees, if applicable</p>
                <p>
                  Proof of language proficiency in the language of instruction
                </p>
                <p>Proof of other academic qualifications</p>
                <p>
                  Proof of financial resources (e.g. confirmation of
                  scholarship, formal obligation letter
                  (“Verpflichtungserklärung”) or blocked bank account)
                </p>
                <p>
                  Travel health insurance covering the period from your
                  departure to the date of enrolment at the university
                  (mentioned in your letter of admission) (approx. 3 months)
                </p>
                <p>
                  Please prepare two identical application sets with the
                  above-mentioned documents and bring your original certificates
                  along. Please note that the German consulate general reserves
                  the right to ask for additional documents or the verification
                  of certificates.
                </p>

                <p>
                  Tip: Please make sure to check the visa requirements
                  thoroughly. Visa procedures are very strict and if you happen
                  to miss an appointment or don’t have all required documents by
                  hand, you risk to wait several weeks for the next appointment.
                </p>

                <p>
                  Tip: All information regarding the required documents,
                  translation and authentication can usually be found on the web
                  page of your local German diplomatic representation.
                </p>

                <p>Tips regarding your visa application</p>

                <p>
                  Make sure to apply for the correct visa. You are only allowed
                  to study with a student visa or student application visa.
                  Short-term visa cannot be changed to a student visa!
                </p>
                <p>
                  Apply as early as possible. Visa procedures can take several
                  months!
                </p>
                <p>
                  Check the information on the respective diplomatic mission
                  thoroughly. Visa procedures are strict and you risk to wait
                  several weeks for an addition appointment if you don’t have
                  all necessary documents at hand.
                </p>
                <p>
                  You are a resident of China, Vietnam or Mongolia? Make sure to
                  inform you about the APS certificate needed to apply to a
                  German university.
                </p>
              </div>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>
      </div>
    </div>
  );
}
