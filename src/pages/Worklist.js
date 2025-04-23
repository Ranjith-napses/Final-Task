import React from "react";
import Workcard from "../organisms/Workcard";
 



const Workitem=[
    {
        title: 'Designing Dashboards',
        year: '2020',
        type: 'Dashboard',
        img: '/img/Rectangle 30.png',
        description: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'  
    },
    {
        title: 'Vibrant Portraits of 2020',
        year: '2018',
        type: 'Illustration',
        img: '/img/Rectangle 32.png',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' 
    },
    {
        title: '36 Days of Malayalam type',
        year: '2018',
        type: 'Typography',
        img: '/img/Rectangle 34.png',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        title: 'Components',
        year: ' 2018 ',
        type: 'Components, Design',
        img: '/img/Rectangle 40.png',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
];

const Worklist = () =>{
    return(
        <div className="space-y-8">
            {Workitem.map((item,index)=>(
                <Workcard key ={index}{ ...item}/>
            ))}
        </div>
    );
};

export default Worklist;
