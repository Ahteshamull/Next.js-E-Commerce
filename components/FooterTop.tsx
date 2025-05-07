
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
export default function FooterTop() {
  const data: ContactItemData[] = [
    {
      title: "Visit Us",
      subtitle: "Dhaka, Bangladesh",
      icon: (
        <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
    {
      title: "Call Us",
      subtitle: "+8801845336612",
      icon: (
        <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
    {
      title: "Working Hours",
      subtitle: "Sat - Thu: 9:30 AM - 6:30 PM",
      icon: (
        <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
    {
      title: "Email Us",
      subtitle: "ahteshamulhasan2@gmail.com",
      icon: (
        <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b">
      {data.map((item, index) => (
        <div key={index} className="flex items-center  gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect">
          {item.icon}
          <div>
            <h3 className="text-lg text-gray-900 font-semibold group-hover:text-black hoverEffect">{item.title}</h3>
            <p className="text-gray-500 text-sm group-hover:text-black hoverEffect">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
