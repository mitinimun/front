import React from "react";
import Footer from "../../Footer/Footer";
import CommitteeCard from "./CommitteeCard";

const Committee = () => {
  const CommData = [
    {
      img: "https://i.ibb.co/2Fmwv9m/1-1.png",
      title: "Security Council",
      description:
        "Accounting for over 13.5 million civilians displaced within the nation, and scattered internationally as refugees, and over half a million deaths. With 12.4 million suffering from food insecurities, a GDP that has dwindled by over 60% due to this horrid war, Syria, and the Middle East are suffering, have been, for well over a decade.The adoption of UN Security Council Resolution 2139, along with the implementation of two additional resolutions, Resolution 2165, and Resolution 2191 in the same year, and yet, the civil war ravaging Syria now spreading its miasma throughout the Middle East has been the only development since.The delegates in the UNSC must review the past, resolve the present, and consider the future to draft a conclusive resolution",
    },
    {
      img: "https://i.ibb.co/s66QKT7/2.png",
      title: "Human Rights Council",
      description:
        "Human rights are the bedrock of a just and compassionate society, serving as the moral compass guiding our interactions and institutions. However, even today some instances shake our very being; making us question humanity and what it stands for. Human trafficking is undoubtedly one of those instances. Whether it be through devious organ harvesting and trading schemes, or forced labor and sexual exploitation, human trafficking stands as a barrier between us and equality, justice, as well as societal progress. The delegates of UNHRC must engage in discussions that delve into various aspects such as poverty, social exclusion, gender inequality, and more, that promote human trafficking. The committee must find common ground through comprehensive strategies, to dismantle trafficking networks and empower survivors.",
    },
    {
      img: "https://i.ibb.co/k8t13wR/4.png",
      title: "Disarmament and International Security Committee",
      description:
        "In an age when global maritime trade is vital to economic prosperity, protecting the seas from piracy and armed robbery is of utmost importance. It serves as the lifeblood of the global economy, facilitating the movement of goods and commodities across vast distances. It connects nations, drives economic growth, and shapes geopolitical dynamics. The Indian Ocean, a critical artery of this, faces challenges in this regard. As delegates come together to address this pressing issue, it is essential to develop comprehensive strategies to ensure maritime security, from strengthening cooperation between countries to deploying advanced technology. ",
    },
    {
      img: "https://i.ibb.co/wLncM7b/9.png",
      title: "NATO: Futuristic Affairs",
      description:
        "In a world where emerging and disruptive technologies are permeating every aspect of society, from personal electronics to essential services like banking and shopping, the impact on security is profound. These innovative technologies offer NATO militaries new avenues to enhance their effectiveness, resilience, cost-efficiency, and sustainability. However, alongside these opportunities, they also introduce new threats from both state and non-state actors, posing challenges to both military operations and civilian safety. These developments have heightened the lethality and destructive potential of warfare, blurring the boundaries between different forms of conflict. Direct confrontations are giving way to warfare and grey zone tactics, where the lines of conflict are diffuse, and proxy actors play a prominent role in shaping the battlefield. In the Committee, Delegates are tasked with proposing solutions and recommendations to address the challenges and opportunities arising from technological advancements in warfare. This involves formulating strategies to ensure NATO's effectiveness, agility, and preparedness for future security scenarios.",
    },
    {
      img: "https://i.ibb.co/hMHWhBV/3.png",
      title: "Commission on the Status of Women",
      description:
        "Even in today’s world, gendered violence against young girls is a devastating issue faced by millions worldwide. Child marriages, education and healthcare inequalities are a few of an abundant amount of issues which robs girls of their childhood and their fundamental rights. During the past decade, the amount of girls who were married as children decreased by 15%. This is only one of many examples which exhibits that a difference can be made. Delegates are expected to address such issues and come up with innovative ideas to extinguish and approach this agenda using unique strategies to build a greater bond amongst nations and tackle the issues put forth.",
    },
    {
      img: "https://i.ibb.co/hRX1BDp/10-1.png",
      title: "The Historic Committee on Cuban Affairs",
      description:
        "Get ready to travel back in time to the height of the Cold War. Our Model UN committee, ‘Addressing the Cuban Missile Crisis: Managing Cold War Tensions, 1962’ is where diplomacy meets high stakes. It's October 15, 1962, and the world is on the brink of a nuclear war after the discovery of Soviet missile sites in Cuba. As a delegate, you'll take on the role of a world leader, navigating the complex web of international relations to prevent global catastrophe.",
    },
    {
      img: "https://i.ibb.co/WndGrNK/6.png",
      title: "Organization of Islamic Cooperation",
      description:
        "Afghanistan has been plagued by insecurity, threats by terrorist groups, and political instability in the country for decades. With a large mass of civilians, members of armed groups, and Afghan security forces losing their lives, there are some necessary strategies that are needed in order to address this instability in the country. The delegates in OIC are to come to decisions about fostering inclusive peace negotiations and addressing as well as finding solutions for the cross-border threats, promoting economic integration and engaging in diplomatic efforts to build trust and collaboration among the neighboring countries. To propose measures that could move Afghanistan closer to achieve stability and peace.",
    },
    {
      img: "https://i.ibb.co/TkrnJ2M/7.png",
      title: "Commission on Crime Prevention and Criminal Justice",
      description:
        "To tackle illicit activities like corruption, money laundering, and various financial crimes, the agenda for this committee involves developing strategies to overcome such problems. These illicit activities have a detrimental impact on societies and economies worldwide. Governments and financial institutions prioritize fighting these crimes due to their detrimental impact on society and the economy. Strategies have evolved, emphasizing collaboration between fraud and anti-money laundering terms, leveraging technology such as machine learning for early threat detection, and fostering responsiveness through proactive measures. The scale of financial crime, estimated at 2 GDP, underscores the urgency of innovative approaches. Addressing these challenges requires a multifaceted approach, including information sharing, regulatory initiatives, and international cooperation to combat these pervasive threats effectively.",
    },
    {
      img: "https://i.ibb.co/8Kf5h1b/8.png",
      title: "International Press Corps",
      description:
        "With an open agenda, the IP aims to shed light on the diverse perspective of the delegates and scrutinize the global affairs the committees shall deal with in the sessions. Through professional journalism, the IP seeks to hear the unheard, to inform the uninformed. In alignment with the principles of the  Fourth State, the IP functions independently, devoid of any form of bias or prejudice. As a beacon of spreading information and upholding the truth. The IP invites and encourages delegates to engage and share their ideas while analyzing and questioning everybody on and off the scene.",
    },
    {
      img: "https://i.ibb.co/TkrnJ2M/7.png",
      title: "Federal Parliament of Nepal",
      description:
        "The Federal Parliament of Nepal’s agenda on the privatization of government land and property aspires to examine the crucial subject of employing state-owned assets to foster economic development and growth. This committee will investigate potential highlights, hurdles, and moral implications of privatization. Delegates must work together to develop comprehensive solutions that align with the interests of the state and its citizenry by means of careful research and strategic planning. It is required of the delegates to conduct in-depth investigation and assessment, as well as conscientiously consider opposing perspectives, to craft judicious policies. ",
    },
  ];

  return (
    <>
      <div className="pt-28 md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl text-neutral-700 font-semibold pb-16">
            Committees
          </h2>
          {/* Committees */}
          <div className="flex justify-center pb-16">
            <div className="container">
              <div className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16">
                {CommData.map((item, index) => (
                  <CommitteeCard key={index} img={item.img} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Committee;
