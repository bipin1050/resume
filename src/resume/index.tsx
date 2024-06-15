const Resume = () => {
  return (
    <div className="w-[900px] mx-auto bg-[#f5f5f5] my-2 text-[#333333] border-t-8 border-b-4 border-[#666666] ">
      <div className="w-a4 mx-auto">
        <div className="py-2 flex justify-between">
          <div className="w-1/2">
            <h1 className="uppercase text-5xl tracking-wider">Bipin Khanal</h1>
            <h3 className="uppercase text-2xl italic pt-3 tracking-wide font-thin ">
              Computer Engineer
            </h3>
          </div>
          <div className="w-[310px] text-base leading-tight">
            <div className="flex">
              <h5 className="font-bold">Email: &nbsp;</h5>
              <div className="flex flex-col text-left">
                <a
                  href="mailto:bipin.khanal1050@gmail.com"
                  className="underline"
                >
                  bipin.khanal1050@gmail.com
                </a>
                <a
                  href="mailto:075bct022.bipin@pcampus.edu.np"
                  className="underline"
                >
                  075bct022.bipin@pcampus.edu.np
                </a>
              </div>
            </div>
            <div className="flex">
              <h5 className="font-bold">Github: &nbsp;</h5>
              <div className="flex flex-col text-left">
                <a
                  href="https://www.github.com/bipin1050"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github/bipin1050
                </a>
              </div>
            </div>
            <div className="flex">
              <h5 className="font-bold">Linkedin: &nbsp;</h5>
              <div className="flex flex-col text-left">
                <a
                  href="https://www.linkedin.com/in/bipinkhanal1050/"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin/bipinkhanal1050
                </a>
              </div>
            </div>
            <div className="flex">
              <h5 className="font-bold">Website: &nbsp;</h5>
              <div className="flex flex-col text-left">
                <a
                  href="https://khanalbipin.com.np"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  khanalbipin.com.np
                </a>
              </div>
            </div>
            <div className="flex">
              <h5 className="font-bold">Contact: &nbsp;</h5>
              <div className="flex flex-col text-left">9863490911</div>
            </div>
            <div className="flex">
              <h5 className="font-bold">Address: &nbsp;</h5>
              <div className="flex flex-col text-left">
                Putalisadak, Kathmandu
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <h2 className=" italic text-lg mb-1 border-b-2 border-[#cccccc]">
            Skills
          </h2>
          <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold  w-[85px]">Web Dev :</h3>
            <p className="text-sm">
              HTML, CSS, Javascript, Node, React, Next, Django, Postgres,
              MongoDB
            </p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold w-[85px]">OS :</h3>
            <p className="text-sm">Windows, Linux</p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] flex gap-1 items-center">
            <h3 className="text-sm italic font-bold w-[85px]">Soft Skills :</h3>
            <p className="text-sm">
              Leadership, Event Management, Problem Solving, Communication
            </p>
          </div>
        </div>
        <div className="py-2">
          <h2 className=" italic text-lg mb-1 border-b-2 border-[#cccccc]">
            Work Experience
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">Mach Records</h3>
              <h3>May 2024 - Present</h3>
            </div>
            <p className="text-sm font-bold">Fullstack Developer</p>
            <p className="text-sm">
              Build and deployed company web application (
              <b>React, Django, PostgreSQL, Nginx, AWS </b>)
            </p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">
                Sandbox Software Pvt. Ltd.
              </h3>
              <h3>July 2023 - June 2024</h3>
            </div>
            <p className="text-sm font-bold">Fullstack Developer</p>
            <p className="text-sm">
              Worked as a fullstack web developer (
              <b>React, Django, PostgreSQL</b>)
            </p>
          </div>
        </div>
        <div className="py-2">
          <h2 className=" italic text-lg mb-1 border-b-2 border-[#cccccc]">
            Other Experience
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">LOCUS, IOE Pulchowk</h3>
              <h3>2022 - 2023</h3>
            </div>
            <p className="text-sm font-bold">Event Manager</p>
            <p className="text-sm">
              Organizing committee for the 19th National Technological Festival,
              LOCUS 2023 which organized more than 30 events.
            </p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">SXC Physics Club</h3>
              <h3>2017 - 2018</h3>
            </div>
            <p className="text-sm font-bold">Program Coordinator</p>
            <p className="text-sm">
              Conducted various programs like Physics Olympiad, Innovative
              Classes
            </p>
          </div>
        </div>
        <div className="py-2">
          <h2 className=" italic text-lg mb-1 border-b-2 border-[#cccccc]">
            Education
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">
                Bachelor of Computer Engineering
              </h3>
              <h3>2018 - 2023</h3>
            </div>
            <p className="text-sm font-bold">
              Central Campus, IOE Pulchowk, Tribhuwan University
            </p>
            <p className="text-sm">
              Secured Rank 35 In Entrance Exam in 2075 B.S. (2018 A.D.) among
              nearly 16,000 candidates
            </p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">+2 in Science</h3>
              <h3>2016 - 2018</h3>
            </div>
            <p className="text-sm font-bold">St. Xavier College, Maitighar</p>
          </div>
        </div>
        <div className="py-2">
          <h2 className=" italic text-lg mb-1 border-b-2 border-[#cccccc]">
            Certification
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-1 leading-tight">
            <h3 className="flex gap-1 text-base">
              <b>
                <a
                  href="https://coursera.org/share/7605bf466e1b7786b6ce84119493b002"
                  target="_blank"
                >
                  Front-End Web Development with React
                </a>
              </b>
              by Coursera
            </h3>
            <h3>
              <b>
                <a
                  href="https://coursera.org/share/926c286159686961350107002062ddf9"
                  target="_blank"
                >
                  Front-End Developer Capstone
                </a>
              </b>
              by Coursera
            </h3>
            <h3>
              <b>
                <a
                  href="https://www.credly.com/badges/a5ddbc34-d083-4468-b35d-119bf31f8fd2?source=linked_in_profile"
                  target="_blank"
                >
                  AWS Academy Cloud Foundation
                </a>
              </b>
              by AWS Academy
            </h3>
          </div>
        </div>
        <div className="py-2">
          <h2 className=" italic text-lg mb-1 border-b-2 border-[#cccccc]">
            Projects
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div>
              <h3 className="text-base font-bold">
                Mach Records (
                <a href="https://machrecords.com" target="_blank">
                  machrecords.com
                </a>
                )
              </h3>
            </div>
            <p className="text-sm">
              Web services to sell the musics recorded in the Mach Studio,
              implemented using React, Django, and PostgreSQL.
            </p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div>
              <h3 className="text-base font-bold">Agrotech</h3>
            </div>
            <p className="text-sm">
              Online platform for farmers and retailers that act as a common
              marketplace for both parties, implemented using Next, Node, and
              MongoDB.
            </p>
          </div>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <div>
              <h3 className="text-base font-bold">
                Inventory Management System
              </h3>
            </div>
            <p className="text-sm">
              Web app created using React, Node, and MySQL to manage inventory
              items efficiently.
            </p>
          </div>
        </div>
        <div className="py-2">
          <h2 className=" italic text-lg mb-1 border-b-2 border-[#cccccc]">
            Language
          </h2>
          <div className="border-b-2 border-[#e7e7e7] py-1">
            <p className="text-sm">
              <b>English:</b> Full professional Proficiency
            </p>
            <p className="text-sm">
              <b>Nepali:</b> Native or bilingual proficiency
            </p>
            <p className="text-sm">
              <b>Hindi:</b> Professional Working Proficiency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
