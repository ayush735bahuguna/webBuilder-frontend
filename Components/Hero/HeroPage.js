import { ArrowDownCircle, CheckCircle2, Info } from 'lucide-react'
import React from 'react'

export default function HeroPage() {
    return (
        <>
            <p className='text-3xl mb-1'>Best Website builders in the US</p>

            <hr />
            <div className="text-[12px] my-2 flex text-slate-400 justify-between flex-row flex-wrap gap-4">

                <div className="flex flex-row flex-wrap gap-4">

                    <p className='flex gap-1 items-center justify-center'> <CheckCircle2 size={'13px'} /> Last Updated - February 22, 2020</p>

                    <p className='flex gap-1 items-center justify-center'> <Info size={'13px'} /> Advertising Disclosure</p>
                </div>

                <p className='flex gap-1 items-center justify-center'> <ArrowDownCircle size={'13px'} /> Top Relevant</p>


            </div>
            <hr />

            <div className="flex text-slate-500 items-center justify-start max-sm:gap-4 sm:gap-6 underline py-2 flex-wrap">
                <span>Tools</span>
                <span>AWS Builder</span>
                <span>Start Build</span>
                <span>Build Supplies</span>
                <span>Tooling</span>
                <span>BlueHosting</span>
            </div>

            <div className="flex text-[12px] flex-wrap text-slate-800 items-center justify-start gap-2 py-2">
                <span>Home </span> &gt;
                <span>Hosting for all</span> &gt;
                <span>Hosting</span> &gt;
                <span>Hosting6</span> &gt;
                <span>Hosting5</span>
            </div>

        </>
    )
}
