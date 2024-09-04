import React, { useState } from 'react';
import pri1 from '../../assets/pri1.png'
import pri2 from '../../assets/pri2.png'
import pri3 from '../../assets/pri3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'



const Price = () => {
    const [isMonthly, setIsMonthly] = useState(true);

      return (
        <div>
            <div className='max-w-container mx-auto mt-[100px]'>
                <div className='text-center'>
                    <h1 className='font-Chivo font-bold text-[46px] text-black'>Pricing Designed To Fit Your Business</h1>
                    <div className="flex text-center items-center ml-[600px] mt-[30px]">
          <button
            className={`px-4 py-2 ${isMonthly ? 'bg-blue text-white' : 'text-blue'} rounded-l-lg`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 ${!isMonthly ? 'bg-blue text-white' : 'text-black'} rounded-r-lg`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </button>
        </div>
                </div>
                <div className='mt-[76px] flex items-center text-center justify-between'>
                    <div className='w-[450px]'>
                        <img className='flex items-center mx-auto justify-center  max-w-xs' src={pri1} alt="" />
                        <h1 className='font-Chivo font-bold text-[24px] text-blue text-center'>Personal</h1>
                        <h1 className='font-Chivo font-bold text-[44px] text-black text-center'>$10/mth</h1>
                        <div className='flex  mx-auto justify-center text-center'>
                            <p className='font-sans font-medium text-[18px] text-gray'>Annual pricing </p>
                        <p className='font-sans font-medium text-[18px] text-blue'>(save 20%)</p>
                        </div>
                        <div className='text-center'>
                        <div className='text-center'>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px]  text-gray'>Calendar View</h1>
                            </div>
                            <div className='flex text-center gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray'>Custom Templates</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray'>list view</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray'>board view</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px] mb-[45px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray '>Assignees & Due Dates</h1>
                            </div>
                            <a href="" className='font-sans font-medium text-[18px] text-white boder bg-blue py-[20px] px-[105px] mx-auto justify-center text-center '>Purchase Now</a>
                        </div>
                        </div>
                    </div>
                    <div className='w-[450px] bg-blue text-white'>
                        <img className='flex items-center mx-auto justify-center  max-w-xs' src={pri2} alt="" />
                        <h1 className='font-Chivo font-bold text-[24px]  text-center'>Team</h1>
                        <h1 className='font-Chivo font-bold text-[44px]  text-center'>$25/mth</h1>
                        <div className='flex  mx-auto justify-center text-center'>
                            <p className='font-sans font-medium text-[18px] '>Annual pricing</p>
                        <p className='font-sans font-medium text-[18px] '>(save 35%)</p>
                        </div>
                        <div className=''>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px]'>Timeline Review</h1>
                            </div>
                            <div className='flex text-center gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] '>Custom fields</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px]'>Custom Templates</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] '>Task dependencies</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px] mb-[45px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] mb-[40px]'>Milestones Manage</h1>
                            </div>
                            <a href="" className='font-sans font-medium text-[18px] text-white boder bg-blue py-[20px] px-[105px] mx-auto justify-center text-center '>Purchase Now</a>
                        </div>
                    </div>
                    <div className='w-[450px]'>
                        <img className='flex items-center mx-auto justify-center  max-w-xs' src={pri3} alt="" />
                        <h1 className='font-Chivo font-bold text-[24px] text-blue text-center'>Enterprise</h1>
                        <h1 className='font-Chivo font-bold text-[44px] text-black text-center'>$50/mth</h1>
                        <div className='flex  mx-auto justify-center text-center'>
                            <p className='font-sans font-medium text-[18px] text-gray'>Annual pricing </p>
                        <p className='font-sans font-medium text-[18px] text-blue'>(save 40%)</p>
                        </div>
                        <div className=''>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray'>Data export & deletion</h1>
                            </div>
                            <div className='flex text-center gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray'>Block native integrations</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray'>Custom branding</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray'>Lock custom fields</h1>
                            </div>
                            <div className='flex  gap-x-[12px] mt-[40px] ml-[26px] mb-[45px]'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1 className='font-sans font-medium text-[18px] text-gray '>Priority support</h1>
                            </div>
                            <a href="" className='font-sans font-medium text-[18px] text-white boder bg-blue py-[20px] px-[105px] mx-auto justify-center text-center '>Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Price

