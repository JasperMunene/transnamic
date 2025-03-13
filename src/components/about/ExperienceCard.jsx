import { AnimatedCounter } from "../stats/animated-counter";

const ExperienceCard = () => {
    return (
        <div
            className="relative overflow-hidden rounded-3xl"
        >
            <img
                src="https://cdn.prod.website-files.com/66cbf3a93b65cddabce581a1/66d81c1f80fd4e7f940510b5_About-us-banner-v2-p-500.jpg"
                alt="Construction blueprints"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-200/90 to-transparent dark:from-blue-950" />
            <div className="absolute bottom-8 left-8">
                <div
                    className="mb-2 bg-red-600 rounded-full flex items-center justify-center text-white text-6xl font-bold"
                    style={{ width: '100px', height: '100px' }}
                >
                   <AnimatedCounter end={12} suffix="" className='text-white'/>
                </div>
                <div className="text-4xl font-semibold text-red-600">
                    Years of Experience
                </div>
            </div>

        </div>
    );
}

export default ExperienceCard;
