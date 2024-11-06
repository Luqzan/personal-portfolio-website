import { getAllTechnologies } from "@/app/lib/data";
import AboutSection from "@/app/ui/components/AboutSection";
import Box from "@/app/ui/components/Box";
import ContactDetail from "@/app/ui/components/ContactDetail";
import TechBadge from "@/app/ui/components/TechBadge";
import TextHightlight from "@/app/ui/components/TextHighlight";
import Link from "next/link";

export default async function Page() {
  const data = await getAllTechnologies(
    ["id", "name", "label", "src", "color", "officialLink"],
    "relevanceRank"
  );

  return (
    <Box className="flex flex-col gap-8">
      <AboutSection mainHeader="Contact Details">
        <ContactDetail
          type="tel"
          href="tel:+60194493220"
          display="+6019 449 3220"
        />

        <ContactDetail
          type="email"
          href="mailto:luqzanariff@gmail.com"
          display="luqzanariff@gmail.com"
        />

        <ContactDetail
          type="github"
          href="https://github.com/Luqzan"
          display="Luqzan"
        />

        <ContactDetail
          type="linkedin"
          href="https://www.linkedin.com/in/luqzan-ariff-666495142/"
          display="Luqzan Ariff"
        />
      </AboutSection>

      <AboutSection mainHeader="About Me">
        <p className="font-sans text-foreground tracking-wide">
          I&apos;m <TextHightlight>Luqzan Ariff</TextHightlight>, a Software
          Engineer specializing in <TextHightlight>Full-Stack</TextHightlight>{" "}
          Development. I&apos;m passionate about{" "}
          <TextHightlight>creating digital solutions</TextHightlight> that are
          both functional and visually engaging, with a focus on{" "}
          <TextHightlight>usability and performance</TextHightlight>.
        </p>
      </AboutSection>

      <AboutSection mainHeader="Skills & Technologies">
        <div className="flex flex-row flex-wrap gap-2">
          {data.map((technology) => (
            <Link
              key={technology.id}
              href={technology.officialLink}
              target="_blank"
              className="hover:-translate-y-1 hover:scale-110 transition ease-out duration-300 rounded-lg"
            >
              <TechBadge technology={technology} />
            </Link>
          ))}
        </div>
      </AboutSection>

      <AboutSection mainHeader="Background & Experiences">
        <p className="font-sans text-foreground tracking-wide">
          I <TextHightlight>started my journey</TextHightlight> in software
          development{" "}
          <TextHightlight>at Aim Aerial Technologies</TextHightlight>, a
          start-up tech-solution-provider company comprises of 8 people, where I
          contributed to{" "}
          <TextHightlight>
            innovative web and mobile applications
          </TextHightlight>{" "}
          for various industries. My experience includes developing an{" "}
          <TextHightlight>e-wallet mobile app</TextHightlight>, a{" "}
          <TextHightlight>healthcare membership system</TextHightlight>, and an{" "}
          <TextHightlight>
            online portal for industrial machine maintenance
          </TextHightlight>
          . In addition, I{" "}
          <TextHightlight>provided on-site support</TextHightlight> for a
          construction company who uses our existing products,{" "}
          <TextHightlight>create mockups</TextHightlight> for the marketing
          team, and{" "}
          <TextHightlight>
            participate in initial client engagements
          </TextHightlight>
          .
        </p>

        <p className="font-sans text-foreground tracking-wide">
          <TextHightlight>My focus</TextHightlight> has always been on
          delivering solutions that are{" "}
          <TextHightlight>efficient, secure, and scalable</TextHightlight>. Over
          the years, I&apos;ve gained expertise across the full stack,{" "}
          <TextHightlight>
            from building interactive UIs to managing complex backend systems
          </TextHightlight>
          , and I strive to keep my skills up to date with the latest
          technologies and practices.
        </p>
      </AboutSection>
    </Box>
  );
}
