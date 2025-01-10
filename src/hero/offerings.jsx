import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import individualTherapyIcon from "../assets/psyo.webp";

const Offerings = () => {
  return (
    <div className="bg-teal-50 py-12">
      <div className="max-w-[1600px] w-full mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Therapeutic Services
          </h2>
          <p className="text-gray-600 mt-2">
            Experience personalized therapy approaches tailored to your unique
            needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className=" flex flex-col">
            <CardImage src={individualTherapyIcon} alt="Individual Therapy" />
            <CardHeader className="flex-1 p-4">
              <CardTitle className="text-xl text-gray-800">
                Individual Therapy
              </CardTitle>
              <CardContent>
                <CardDescription className="mb-4">
                  Personalized one-on-one sessions focused on helping you
                  overcome challenges, develop coping strategies, and achieve
                  emotional well-being. These sessions are tailored to your
                  unique needs and use evidence-based approaches to promote
                  personal growth and resilience.
                </CardDescription>
                <a
                  href="#"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Learn more &rarr;
                </a>
              </CardContent>
            </CardHeader>
          </Card>

          {/* Card 2 */}

          <Card className=" flex flex-col">
            <CardImage src={individualTherapyIcon} alt="Individual Therapy" />
            <CardHeader className="flex-1 p-4">
              <CardTitle className="text-xl text-gray-800">
                Couples Counseling
              </CardTitle>
              <CardContent>
                <CardDescription className="mb-4">
                  Strengthen your relationship through guided sessions that
                  enhance communication, resolve conflicts, and deepen emotional
                  connections. Whether facing challenges or seeking to enrich
                  your bond, these sessions are designed to nurture mutual
                  understanding and respect.
                </CardDescription>
                <a
                  href="#"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Learn more &rarr;
                </a>
              </CardContent>
            </CardHeader>
          </Card>

          {/* Card 3 */}

          <Card className=" flex flex-col">
            <CardImage src={individualTherapyIcon} alt="Individual Therapy" />
            <CardHeader className="flex-1 p-4">
              <CardTitle className="text-xl text-gray-800">
                Group Therapy
              </CardTitle>
              <CardContent>
                <CardDescription className="mb-4">
                  Join supportive group sessions where you can share
                  experiences, learn from others, and develop valuable
                  interpersonal skills. These guided sessions provide a safe
                  space to connect, grow, and build resilience with peers.
                </CardDescription>
                <a
                  href="#"
                  className="text-teal-600 font-medium hover:underline"
                >
                  Learn more &rarr;
                </a>
              </CardContent>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            onClick={() => console.log("All Services clicked")}
          >
            View All Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
