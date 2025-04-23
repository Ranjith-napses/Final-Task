import React from "react";
import Layout from "../templates/Layout";
import Text from "../atoms/Text";
import Image from "../atoms/Image";



const Workdetails =( ) => {
    return(
        <Layout title="Designing Dashboards">
            <div className="flex items-center gap-2 mt-4">
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">2020 </span>
              <p className="text-md font-medium text-gray-700">Dashboard, User Experience Design</p>
            </div>
            <p className="mt-6 text-gray-700">
                   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                   Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>

           
            <Image src="/img/dashboard.png" alt="Dashboard View" className="rounded-lg my-6" />


            <h1 className="text-2xl font-bold text-darkBlue">Heading 1</h1>
               <br></br>
            <h2 className="text-xl font-semibold text-darkBlue mt-1 mb-3">Heading 2</h2>

            <Text className="text-black-700 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            
            <div className="grid gap-4 mt-6">
               <Image src="/img/car.png" alt="Car Interface" className="rounded-lg" />
               <Image src="/img/order.png" alt="Order Screen" className="rounded-lg" />
           </div>
        </Layout>
    );
};
export default Workdetails;