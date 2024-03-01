'use client'
import { ArrowDown, CheckCircle, Gem, Info, Star, Trophy } from 'lucide-react'
import React from 'react'

export default function Card({ heading, headingDescription, highlight, ratingNumber, ratingText, imageUrl, BestChoice, BestValue, index, tag, list, checkList }) {
    return (
        <div className='flex sm:flex-row p-3 gap-4 items-center justify-center relative my-7 max-sm:flex-col'>

            {
                BestChoice &&
                <div className="absolute -top-2 -left-2 text-[12px] flex gap-2 bg-[#FF7724] text-white p-2 rounded-lg"><Trophy size={'15px'} /> Best Choice</div>
            }

            <div className="border absolute top-10 -left-2 w-[25px] h-[25px] rounded-full flex items-center justify-center">{index}</div>

            {
                BestValue &&
                <div className="absolute -top-2 -left-2 text-[12px] flex gap-2 bg-[#FF7724] text-white p-2 rounded-lg"><Gem size={'15px'} /> Best Value</div>
            }

            <img src={imageUrl} alt='course image' width={'230px'} height={'auto'} className='flex-shrink-0' />

            <div className='sm:w-1/2 max-sm:w-full text-[13px] flex items-start justify-between flex-col'>
                <div>
                    <div className='pb-2'>
                        <span className='font-bold'>{heading} - </span>
                        <span className='text-slate-600'> {headingDescription}</span>
                    </div>
                    {tag && <div className='mb-2 bg-slate-200/90 w-fit py-1 px-2 rounded-lg'>{tag}</div>}
                    <div>
                        <span className='font-bold'>Main higlight</span>
                        <br />
                        {highlight && <span className='p-3 text-slate-600'>{highlight}</span>}
                        {list && <>
                            <div className='bg-[#FFF4ED] p-2  rounded-lg ms-6 my-1'>
                                {list?.map((e, i) => {
                                    return <div key={i}>
                                        <div className='flex flex-row gap-3 m-1 '>
                                            <p className='bg-white p-1 rounded-lg'>{e.no}</p>
                                            <p>{e.text}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </>}

                        {checkList && <div className='flex flex-col my-2'>
                            Why we love it :
                            {checkList?.map((e, i) => {
                                return <div key={i} className='ps-2 flex flex-row gap-2 items-center justify-start'>
                                    <CheckCircle size={'13px'} color='blue' />    {e}
                                </div>
                            })}
                        </div>}

                    </div>
                </div>
                <span className='text-blue-700 underline flex gap-1 items-center justify-start'>Show more <ArrowDown size={'20px'} /></span>
            </div>

            <div className="sm:w-[150px] max-sm:w-full bg-slate-100 p-3 rounded-lg relative flex flex-col items-center justify-around min-h-[200px]">
                <div className="flex flex-col items-center justify-center text-blue-900">
                    <Info size={'14px'} className='absolute top-2 right-2' />
                    <p className='text-4xl'>{ratingNumber}</p>
                    <p className='text-sm'>{ratingText}</p>
                </div>
                <div className="flex flex-row gap-1">
                    <Star color='orange' size={'13px'} />
                    <Star color='orange' size={'13px'} />
                    <Star color='orange' size={'13px'} />
                    <Star color='orange' size={'13px'} />
                    <Star color='orange' size={'13px'} />
                </div>
                <button className='bg-blue-600 text-white px-5 py-2 rounded-md w-full'>View</button>
            </div>
        </div>
    )
}
