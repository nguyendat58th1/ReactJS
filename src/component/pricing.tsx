import React from 'react';
import './pricing.css';

export function Pricing() {
    let list = [{
        number: '$100',
        icon: 'fa fa-bicycle',
        text: 'Basic',
        text2: '01 Seat',
        check: ['fa fa-check mr-2 text-primary','fa fa-times mr-2', 'fa fa-times mr-2', 'fa fa-times mr-2']
         
        
    },
    {
        number: '$200',
        icon: 'fa fa-car',
        text: 'Standard',
        text2: '02 Seat',
        check: ['fa fa-check mr-2 text-primary','fa fa-check mr-2 text-primary', 'fa fa-times mr-2', 'fa fa-times mr-2']
        
    },
    {
        number: '$300',
        icon: 'fa fa-rocket',
        text: 'Premium',
        text2: '04 Seat',
        check: ['fa fa-check mr-2 text-primary','fa fa-check mr-2 text-primary', 'fa fa-check mr-2 text-primary', 'fa fa-check mr-2 text-primary']
        
    }]
    return ( <section>
    <div className="container py-5"> 
      <div className="row text-center align-items-end">
        {list.map((item)=>(
             <div className="col-lg-4 mb-5 mb-lg-0">
             <div className="bg-white p-5 rounded-lg shadow">
               <i className={item.icon}></i>
               <h1 className="h6 text-uppercase font-weight-bold mb-4">{item.text}</h1>
               <h2 className="h1 font-weight-bold">{item.number}</h2>
     
               {/* <div className="custom-separator my-4 mx-auto bg-primary"></div> */}
     
               <ul className="list-unstyled my-5 text-small text-left">
                 <li className="mb-3">
                   <i className={item.check[0]}></i> {item.text2}</li>
                 
                 <li className="mb-3 text-muted">
                   <i className={item.check[1]}></i>
                   Tea & Coffee Breaks
                 </li>
                 <li className="mb-3 text-muted">
                   <i className={item.check[2]}></i>
                   Wifi Available
                 </li>
                 <li className="mb-3 text-muted">
                   <i className={item.check[3]}></i>
                   Exclusive Seatings
                 </li>
               </ul>
               <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill"><i className="fa fa-ticket" aria-hidden="true"></i> Buy now</a>
             </div>
           </div>
         
        )
        )}
       
  
  
        
       
       
      
          
  
  
      </div>
    </div>
  </section>)
}