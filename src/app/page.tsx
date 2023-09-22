import Image from "next/image";

import Link from "next/link";

import { resume } from "./config";

export default async function Resume() {
  return (
    <section>
      <div className="h-20 flex items-center justify-center md:h-28">
        <Link href="/">
          <Image
            className="hover:cursor-pointer object-contain"
            src="/resume/logo.png"
            alt="logo"
            width={156}
            height={70}
            priority
          />
        </Link>
      </div>
      <div className="flex rounded-lg bg-white mb-24 mx-0 flex-col lg:flex-row xl:mx-36">
        <div className="w-screen p-5 lg:rounded-l-lg bg-[#fd79a8] lg:w-1/3">
          <div className="flex flex-col justify-center items-center my-7 md:flex-row">
            <Image
              className="w-52 h-52 mr-0 md:mr-10 rounded-full object-contain hover:shadow-2xl lg:mr-0"
              src="/resume/profile.png"
              alt="profile"
              width={200}
              height={200}
              priority
            />
            <div className="block lg:mb-6 lg:hidden">
              <h1 className="text-3xl font-medium text-center m-5 md:m-10">
                {resume.name}
              </h1>
              <div className="text-l font-light text-center">
                {resume.description}
              </div>
            </div>
          </div>
          <div className="mb-5 pb-5 border-b border-b-black border-opacity-50">
            <h2 className="mb-5 text-2xl font-medium text-center">CONTACT</h2>
            <div className="grid grid-cols-[30px_max-content] font-light gap-2 justify-center items-center">
              {resume.contacts.map((contact) => (
                <div key={contact.link} className="contents">
                  {contact.link && (
                    <Link
                      href={contact.link}
                      target="_blank"
                      className="contents"
                    >
                      <Image
                        src={contact.path}
                        width={30}
                        height={30}
                        alt="contact-icon"
                        className="object-contain"
                      />
                      <div className="hover:bg-[#f73d7a] hover:text-[white] text-sm max-w-[200px] p-2">
                        {contact.name}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-medium text-center">
              EXPEREINCED TOOL
            </h2>
            {resume.skills.map((skill) => (
              <>
                <h3 className="text-lg text-center font-normal mt-6 mb-4 ">
                  {skill.topic}
                </h3>
                <div className="grid grid-cols-[repeat(2,30px_max-content)] md:grid-cols-[repeat(4,30px_max-content)] lg:grid-cols-[repeat(2,30px_max-content)] gap-2 justify-center items-center">
                  {skill.skill.map((subSkill) => (
                    <div
                      key={subSkill.path}
                      className="left-panel-item contents"
                    >
                      <Image
                        src={subSkill.path}
                        alt="skill-icon"
                        className="mr-2.5 w-8 h-8 object-contain"
                        width={32}
                        height={32}
                      />
                      <div className="text-sm font-light m-3">
                        {subSkill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="w-screen p-1 md:mb-5 lg:w-2/3 md:p-5">
          <div className="hidden lg:mb-6 lg:block">
            <h1 className="text-5xl font-medium text-center m-8">
              {resume.name}
            </h1>
            <div className="text-xl font-light text-center">
              {resume.description}
            </div>
          </div>
          {resume.mainSection.map((section) => (
            <div key={section.sectionName} className="mb-5">
              <div className="flex flex-col items-center bg-[#fd79a8] ">
                <div
                  className="flex justify-center items-center h-12 bg-[#f73d7a] w-9/12 text-white p-5"
                  style={{
                    clipPath:
                      "polygon(100% 0%, 85% 50%, 100% 100%, 0 100%, 15% 50%, 0 0);",
                  }}
                >
                  <h2 className="text-l font-light text-center md:text-xl">
                    {section.sectionName}
                  </h2>
                </div>
                <div className="bg-white w-11/12 p-5 mb-5">
                  {section.details.map((detail) => (
                    <div
                      key={detail.name}
                      className="mb-3 pb-3 border-b border-b-gray-300 border-solid last:border-b-0"
                    >
                      <div className="flex justify-between">
                        <h3 className="text-xl font-semibold">{detail.name}</h3>
                        {detail.dateTime && (
                          <h3 className="hidden text-lg text-[#a60e32] font-light md:block">
                            {detail.dateTime}
                          </h3>
                        )}
                        {detail.link && (
                          <Link href={detail.link} target="_blank">
                            <Image
                              className="w-8"
                              src="/resume/icons/link.svg"
                              alt="link"
                              width={32}
                              height={32}
                            />
                          </Link>
                        )}
                      </div>
                      <div className="text-base font-light">
                        {detail.subheader}
                      </div>
                      {detail.dateTime && (
                        <h3 className="block text-base md:text-lg text-[#a60e32] font-light md:hidden">
                          {detail.dateTime}
                        </h3>
                      )}
                      <div className="mt-3">
                        {detail.descriptions.map((description) => (
                          <div
                            key={description.selector}
                            className={
                              description.selector === "label"
                                ? "my-2 font-semibold"
                                : 'my-1 ml-5 font-light before:bg-[#fd79a8] before:text-[#fd79a8] before:mr-2 before:content-["-"]'
                            }
                            dangerouslySetInnerHTML={{
                              __html: description.label,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
