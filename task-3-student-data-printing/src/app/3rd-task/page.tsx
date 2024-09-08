import Card from "./components/card/Card";
import Header from "./components/header/Header";
import StudentForm from "./components/studentform/StudentForm";


export default function StudentCRUD() {
  return (
    <>
    <Header />
    <h1 className="font-sans font-bold text-3xl text-center">Student Details</h1>
    <StudentForm/>
    </>
  )
}
