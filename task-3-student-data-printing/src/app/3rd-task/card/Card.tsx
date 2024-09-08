import { cardProps, initialStudentData } from "../type";

export default function Card(props: cardProps) {
    console.log(props.initialData)
  return (
    <div className=" flex">
        {props.initialData.map((items, index)=>{
            return <div key={index} className=" w-48 h-full m-6 p-4 bg-slate-400 text-white">
                        <p>Name: {items.name}</p>
                        <p>Age: {items.age}</p>
                    </div>
        })}
    </div>
  )
}
