import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Award, Calendar, Clock, Group, Mic, Target } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI-Powered Mock Interviews",
    description:
      "Practice with a virtual interviewer that provides real-time feedback.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Choose your own interview times and practice at your convenience.",
  },
  {
    icon: Award,
    title: "Personalized Feedback",
    description:
      "Receive tailored feedback on your performance to improve your skills.",
  },
  {
    icon: Group,
    title: "Collaborative Learning",
    description: "Connect with peers for group practice sessions and feedback.",
  },
  {
    title: "Progress Tracking",
    icon: Clock,
    description:
      "Monitor your improvement over time with detailed analytics and reports.",
  },
  {
    icon: Target,
    title: "Job Specific Questions",
    description:
      "Get access to a library of questions tailored to your target job role.",
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="w-full py-6 px-4 bg-background/10 border-accent/10 backdrop-blur-lg text-left rounded-lg shadow-md hover:shadow-lg hover:border-accent/30 transition-all duration-300 ease-in-out cursor-pointer">
      <CardHeader className="flex flex-col items-start justify-center gap-4">
        {icon}
        <div className="flex flex-col gap-2">
          <CardTitle className="text-xl font-semibold text-foreground">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-foreground">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

const Features = () => {
  return (
    <div className="h-fit min-h-screen w-full flex flex-col items-start justify-center relative">
      <div className="absolute top-0 left-0 w-full h-screen">
        <Image
          src="/features-gradient.svg"
          alt="Background Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center flex-col justify-center gap-16 w-full h-full z-10 px-8 md:px-32 py-8 lg:py-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-foreground -leading-[1.2px] -tracking-[1.2px] text-center">
            Prepare for Any Interview with AI
          </h1>
          <p className="text-sm md:text-base max-w-[600px] text-center">
            Our AI-powered platform helps you practice and perfect your
            interview skills with personalized feedback.
          </p>
        </div>
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={<feature.icon className="text-accent w-8 h-8" />}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
