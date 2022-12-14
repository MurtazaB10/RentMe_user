import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Referral } from './Referral';
// import "react-tabs/style/react-tabs.css";
import './Support.css';
import {Shipping} from './Shipping';
import { Cancel } from './Cancel';
import { Policy } from './Privacy';
import { useHistory } from 'react-router-dom';
export default function Support() {
  const history = useHistory();
  return (
    <div className="policy" >
      <div className='privcypolicy'>
      <Tabs>
        <TabList>
          <Tab>
            <p>Shipping Policy</p>
          </Tab>
          <Tab>
            <p>Cancellation & Return</p>
          </Tab>
          <Tab>
            <p>Privay Policy</p>
          </Tab>
          <Tab>
            <p>Referral Terms & Conditions</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <Shipping/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Cancel/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <Policy/>
          </div>
        </TabPanel>
      
        <TabPanel>
          <div className="panel-content">
            <Referral/>
          </div>
        </TabPanel>
      </Tabs>
      </div>
      <div className='checkarea'>
      <form onSubmit={() =>{
    history.push('/checkout');
  }}>
      <div>
      <input
          type="checkbox"
          required
        />
      <label>
      I accept the terms and conditions{ " "}
      </label>    
      </div>
      <button type='submit'>Proceed</button>
      </form>
      </div>
    </div>
  );
}
// import React from 'react';

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';

// // Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';

// export default function Support() {
//     return (
//         <Accordion>
//             <AccordionItem>
//                 <AccordionItemHeading>
//                     <AccordionItemButton>
//                         What harsh truths do you prefer to ignore?
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                     <p>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//             <AccordionItem>
//                 <AccordionItemHeading>
//                     <AccordionItemButton>
//                         Is free will real or just an illusion?
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                     <p>
//                         In ad velit in ex nostrud dolore cupidatat consectetur
//                         ea in ut nostrud velit in irure cillum tempor laboris
//                         sed adipisicing eu esse duis nulla non.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//         </Accordion>
//     );
// }
// import './Support.css';
// // import { data } from "../../Assesst/Data/Supportdata";
// import { useState } from 'react';
// import Accordion from 'react-bootstrap/Accordion'
// import Accordian from './Accordian';
// // import Accordian from './Accordian';
// function Support(){
//     const data = [
//         {   "id":1,
//             "question": "What are the services do you offer",
//             "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis vitae tempora quod provident tenetur culpa dolore facere? Earum, dolor?"
//            },
//            {"id":2,
//             // "question": "what are our preferred method of payment",
//             "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"
//            },
//            {"id":3,
//             "question": "Are your services beginners friendly",
//             "answer": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores,"
//            }
//     ]
//     const [isActive,setIsActive] = useState(false);
//     return (
//         <div className="user_support">
//             <div className="user_message">
//                 <h1>How can we help you?</h1>
//                 <p>If you cannot find answer to your question in our FAQ, you can always contact us.<br/> We will answer to you shortly!</p>
//                 <textarea placeholder='Write your message here'/>
//                 <button type='submit'>Submit</button>
//             </div>
//             <div className="user_faq">
//                 <div className='acc_title'>
//                     <h1>Frequently Asked Question</h1>
//                 </div>
//                 <div>
//         <div className='info'>
//           {data.map((question) => (
//             <Accordian key={question.id} {...question} />
//           ))}
//         </div>
//     </div>
//                 {/* <div className='accordian'>
//                 {data.map(({ question, answer }) => (
//           <Accordian question={question} answer={answer} />
//         ))}
//                 </div> */}
//             </div>
//         </div>
//     )
// }

// export default Support;
