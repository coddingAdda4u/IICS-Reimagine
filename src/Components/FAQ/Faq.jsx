const faqData = [
  {
    question: "Is IICS Computer Education is NIELIT Accredited?",
    answer: (
      <>
        <p>
          <span className="font-bold text-blue-700">Yes</span>, IICS (Indian Institute of Computer Sciences) is recognized as an NIELIT-accredited institute. It is often referred to as one of the best NIELIT centers in Delhi, offering various DOEACC courses such as <span className="font-medium">CCC (Course on Computer Concepts)</span> and other computer literacy programs. The institute provides a wide range of IT training courses, including software development, hardware and networking, and web designing, making it a popular choice for students seeking government-recognized certifications.
        </p>
        <p className="mt-2">
          For further details about specific courses or branches, you can visit their official website or contact the nearest IICS center.
        </p>
      </>
    ),
  },
  {
    question: "Is IICS Computer Education is NSDC Partner Institute?",
    answer: (
      <p>
        <span className="font-bold text-blue-700">Yes</span>, IICS (Indian Institute of Computer Science) is listed as a partner of the National Skill Development Corporation (NSDC). This partnership aligns with its efforts to provide skill-based training in various IT fields, including cybersecurity, e-accounting, digital marketing, and other corporate courses.
      </p>
    ),
  },
  {
    question: "Is IICS Computer Education is Tally Partner Institute?",
    answer: (
      <p>
        <span className="font-bold text-blue-700">Yes</span>, IICS Computer Education is a <span className="font-medium">“Tally Partner Institute”</span>. You can verify this from Tally Education website.
      </p>
    ),
  },
  {
    question: "Is IICS Computer Education is ISO Registered?",
    answer: (
      <p>
        <span className="font-bold text-blue-700">Yes</span>, IICS Computer Education is ISO registered. It holds an <span className="font-medium">ISO 9001:2015</span> certification.
      </p>
    ),
  },
  {
    question: "NIELIT O Level, A Level and CCC Accreditation Numbers?",
    answer: (
      <>
        <p>
          <span className="font-semibold text-blue-700">O Level:</span> O1764
        </p>
        <p className="mt-1">
          <span className="font-semibold text-blue-700">A Level:</span> A0580
        </p>
        <p className="mt-2 font-semibold">CCC Details</p>
        <ul className="list-disc list-inside ml-4 text-blue-800">
          <li>88005688</li>
          <li>88004525</li>
          <li>88005849</li>
          <li>8800346</li>
        </ul>
      </>
    ),
  },
];

function Faq() {
  return (
    <div className="cover padding-auto">
      <h2 className="heading-1 text-left text-text">
        Frequently Asked Questions
      </h2>
      <div className="cover py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map(({ question, answer }, idx) => (
            <details
              key={idx}
              className="rounded-lg border border-gray-200 bg-white shadow-sm transition-all group open:shadow-md open:border-blue-400"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-2 text-[16px] sm:text-2xl lg:text-lg font-semibold text-primary rounded-t-lg group-open:bg-blue-50 transition-colors">
                <span>{question}</span>
                <svg
                  className="ml-2 h-5 w-5 text-blue-700 transition-transform duration-200 rotate-90 group-open:-rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-2 text-text text-base leading-relaxed">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;