"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { usePortfolioData } from "@/utils/hooks";
import { getAllSkills } from "@/utils/portfolio";
import { getSkillIconPath, isExternalIcon } from "@/utils/skill-icons";

const EducationSkills = () => {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return (
      <section>
        <div className="border-t border-softGray overflow-hidden">
          <div className="container relative z-10">
            <div className="py-16 md:py-32">
              <p className="text-secondary">Loading...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const education = data?.education || [];
  const allSkills = data?.skills ? getAllSkills(data.skills) : [];

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                {education.map((edu, index) => {
                  return (
                    <div key={edu.id || index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{edu.title}</h5>
                        <p className="font-normal">{edu.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                {allSkills.slice(0, 12).map((skill, index) => {
                  return (
                    <div
                      key={`${skill.category}-${skill.name}-${index}`}
                      className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                    >
                      <div className="flex flex-col items-center gap-5">
                        {(() => {
                          const iconPath = getSkillIconPath(skill.name);
                          const isExternal = isExternalIcon(iconPath);
                          
                          return isExternal ? (
                            // External CDN icon
                            <img
                              src={iconPath}
                              alt={skill.name}
                              width={70}
                              height={70}
                              className="object-contain"
                              loading="lazy"
                              onError={(e) => {
                                // Fallback to default icon on error
                                (e.target as HTMLImageElement).src = getImgPath("/images/home/education-skill/figma-icon.svg");
                              }}
                            />
                          ) : (
                            // Local icon
                            <Image
                              src={getImgPath(iconPath)}
                              alt={skill.name}
                              width={70}
                              height={70}
                              className="object-contain"
                            />
                          );
                        })()}
                        <p className="text-black font-normal text-center text-sm">{skill.name}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="9"
                              height="9"
                              rx="4.5"
                              fill={i < skill.rating ? "#FE4300" : "#C0D8E0"}
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
