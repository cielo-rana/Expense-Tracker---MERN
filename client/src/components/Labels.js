import React from 'react'

const obj = [
    {
        type: 'Savings',
        color: 'rgb(255, 99, 132)',
        percentage: 45

    },
    {
        type: 'Investment',
        color: 'rgb(54, 162, 235)',
        percentage: 20

    },
    {
        type: 'Expense',
        color: 'rgb(255, 205, 86)',
        percentage: 10

    }
]
export default function Labels() {
  return (
    <>
        {obj.map((v,k)=><LabelComponent key={k} value={v}></LabelComponent>)}
    </>
  )
}

function LabelComponent({value}){
    if(!value) return <></>;
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background:value.color??'#f9c74f'}}></div>
                <h3 className='text-md'>{value.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{value.percentage ?? 0}%</h3>
        </div>
    )
}