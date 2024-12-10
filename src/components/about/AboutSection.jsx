import AboutTabs from './AboutTabs';
import AboutHeader from './AboutHeader';
import ExperienceCard from './ExperienceCard';

const AboutSection = () => {
    return (
        <section className="bg-white py-24 dark:bg-[#03060C]">
            <div className="container mx-auto px-4">
                <AboutHeader />

                <div className="mt-16 grid gap-8 md:grid-cols-2 items-stretch">
                    <ExperienceCard />
                    <AboutTabs />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
