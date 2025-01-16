import React from 'react';
import { Monitor, Laptop, Server, Smartphone, Database } from 'lucide-react';

const TechAnimation = () => {
  return (
    <div className="flex justify-center items-center space-x-8 py-12">
      <div className="animate-bounce delay-100">
        <Monitor className="h-16 w-16 text-blue-600" />
      </div>
      <div className="animate-bounce delay-200">
        <Laptop className="h-16 w-16 text-blue-500" />
      </div>
      <div className="animate-bounce delay-300">
        <Server className="h-16 w-16 text-blue-400" />
      </div>
      <div className="animate-bounce delay-400">
        <Smartphone className="h-16 w-16 text-blue-300" />
      </div>
      <div className="animate-bounce delay-500">
        <Database className="h-16 w-16 text-blue-200" />
      </div>
    </div>
  );
};

export default TechAnimation;