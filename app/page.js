import Image from "next/image";
import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
  <div className="mt-40">
    <HeroSection/>
  

    <section className="py-20 bg-gray-900"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((statsData, index) =>(
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{statsData.value}</div>
              <div className="text-gray-600">{statsData.label}</div>
            </div>
          ))}  
        </div>
      </div>
    </section>

    <section className="py-20 ">
      <div className=" container mx-auto px-4 ">
        <h2 className="text-3xl gradient-title font-bold text-center mb-12   ">Everything you need to Manage your Finance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"  >
          {featuresData.map((feature,index)=>(
            <Card key={index} className="p-6  bg-gray-900 border-1px border-blue-950 drop-shadow-2xl ">      
            <CardContent className="space-y-4 py0">
              <div className="text-blue-400">
                {feature.icon}
              </div>              
              <h3 className="text-xl text-blue-200 font-semibold">{feature.title} </h3>
              <p className="text-gray-600 ">{feature.description}</p>
              </CardContent>          
          </Card>            
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 pb-100  bg-gray-900 mb-120">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 gradient-title ">
          How it Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksData.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-400 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl text-blue-200 font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold  text-white mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already managing their finances
          smarter with FinWise
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-gray-300 hover:outline-1 hover:text-black animate-bounce"
          >
            Start Free Trial
          </Button>
        </Link>
      </div>
    </section>
          
  </div>
  );
}
