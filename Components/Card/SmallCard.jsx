export default function SmallCard({ imageUrl, title, tag, description, price, helperPrice, discount }) {
    return (
        <div className="flex items-center justify-center flex-col my-7 mx-3">
            <img src={imageUrl} alt='course image' width={'230px'} height={'auto'} className='flex-shrink-0' />

            <div className="flex gap-2 text-[11px] pt-2">
                {tag?.map((e, i) => {
                    return <div key={i} className='mb-2 bg-slate-200/90 w-fit py-1 px-2 rounded-lg'>{e}</div>
                })}
            </div>
            <p>{title}</p>
            <p className='text-[13px] text-slate-500'>{description}</p>
            <div>
                <span>{price}</span>
                &nbsp; <span className='text-[11px]'>{helperPrice}</span>
                &nbsp; <span className='text-[11px] text-red-600'>({discount})</span>
            </div>
            <button className='bg-blue-600 text-white px-5 py-2 rounded-md w-full my-2'>View Deal</button>
        </div>
    )
}
