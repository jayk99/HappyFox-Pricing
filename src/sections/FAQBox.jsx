import React, { useState} from 'react'
import '/Users/Krishna/Desktop/happyfox-pricing/src/global.css'
import { questions } from '../constants';

const FAQBox = () => {

    const [showContent, setShowContent] = useState(false);
    const divs = Array.from({ length: 6 }, (_, index) => index);

    const [showContentArray, setShowContentArray] = useState(Array(divs.length).fill(false));

    const toggleContent = (index) => {

        const updatedShowContentArray = [...showContentArray];
        updatedShowContentArray[index] = !updatedShowContentArray[index];
        setShowContentArray(updatedShowContentArray);
    };


  return (
    <>
        <div className='frequently-asked-wrapper'>
            <div className='frequently-asked-container'>
                <div className='frequently-asked-container-rows'>
                    
                        <div className='faq-container'>
                            <h3 className=' font-inter'>Frequently Asked Questions</h3>

                            <div className='frequently-asked-queries'>
                                <div className='frequently-asked-queries-rows'>
                                {questions.map((item,index) => (
                                    <div key={index} className='queries-rows'>
                                        <div className='queries-column' onClick={() => toggleContent(index)}>
                                            <h6>
                                                {item.question}
                                                <img src="https://assets.www.happyfox.com/v2/images/down-arrow.svg" alt="icon" style={{ transform: showContentArray[index] ? 'rotate(180deg)' : 'rotate(0)' }} />
                                            </h6>
                                           
                                            <p style={{ maxHeight: showContentArray[index] ? '80px' : '0px' }}>{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default FAQBox