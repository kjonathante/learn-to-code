using System;
using System.Collections;

namespace root
{
    class Hello
    {
        static void Main(string[] args)
        {
            string value;
      
            // Check whether the environment variable exists.
            value = Environment.GetEnvironmentVariable("BAR");
            Console.WriteLine("BAR: {0}\n", value);        

            Environment.SetEnvironmentVariable("FOO", "Value1");
            value = Environment.GetEnvironmentVariable("FOO");
            Console.WriteLine("FOO: {0}\n", value);
            Environment.SetEnvironmentVariable("FOO", null); // Delete

            Console.WriteLine("GetEnvironmentVariables: ");
            foreach (DictionaryEntry de in Environment.GetEnvironmentVariables()) 
                Console.WriteLine("  {0} = {1}", de.Key, de.Value);        
        }
    }
}