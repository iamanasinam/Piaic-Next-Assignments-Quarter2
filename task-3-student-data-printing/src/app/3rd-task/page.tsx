
import Card from "./card/Card"
import Input from "./card/input/Input"

export default function page() {
    let StudentData=[{
        name:"Anas",
        age: 24,
      }]


  return (
    <div>
      <Input initialData={StudentData}/>
      {/* <Card initialData={StudentData} /> */}
    </div>
  )
}
