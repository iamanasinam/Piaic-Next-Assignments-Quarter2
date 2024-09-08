export default function Home() {
  let studentdata = [
    { name: 'Ahmed', gender: 'Male', sem1: 3.5, sem2: 3.8, sem3: 3.6, sem4: 3.9, sem5: 3.4, sem6: 3.7, sem7: 3.8, sem8: 3.9, cgpa: 3.7 },
    { name: 'Bilal', gender: 'Male', sem1: 3.6, sem2: 3.9, sem3: 4.0, sem4: 3.8, sem5: 3.9, sem6: 4.0, sem7: 3.9, sem8: 4.0, cgpa: 3.9 },
    { name: 'Hassan', gender: 'Male', sem1: 3.7, sem2: 3.5, sem3: 3.6, sem4: 3.7, sem5: 3.5, sem6: 3.6, sem7: 3.7, sem8: 3.8, cgpa: 3.6 },
    { name: 'Ibrahim', gender: 'Male', sem1: 2.9, sem2: 2.8, sem3: 3.0, sem4: 2.9, sem5: 2.7, sem6: 2.8, sem7: 2.9, sem8: 3.0, cgpa: 2.8 },
    { name: 'Ayesha', gender: 'Female', sem1: 3.1, sem2: 3.2, sem3: 3.3, sem4: 3.0, sem5: 3.2, sem6: 3.1, sem7: 3.2, sem8: 3.3, cgpa: 3.2 },
    { name: 'Fatima', gender: 'Female', sem1: 3.4, sem2: 3.5, sem3: 3.6, sem4: 3.5, sem5: 3.6, sem6: 3.7, sem7: 3.6, sem8: 3.7, cgpa: 3.6 },
    { name: 'Umar', gender: 'Male', sem1: 2.5, sem2: 2.7, sem3: 2.8, sem4: 2.9, sem5: 3.0, sem6: 3.1, sem7: 3.0, sem8: 3.1, cgpa: 2.9 },
    { name: 'Zainab', gender: 'Female', sem1: 3.6, sem2: 3.7, sem3: 3.8, sem4: 3.7, sem5: 3.8, sem6: 3.9, sem7: 3.8, sem8: 3.9, cgpa: 3.8 },
    { name: 'Hamza', gender: 'Male', sem1: 2.9, sem2: 2.8, sem3: 2.7, sem4: 3.0, sem5: 3.1, sem6: 3.0, sem7: 3.2, sem8: 3.1, cgpa: 3.0 },
    { name: 'Maryam', gender: 'Female', sem1: 3.7, sem2: 3.8, sem3: 3.9, sem4: 3.8, sem5: 3.9, sem6: 4.0, sem7: 3.9, sem8: 4.0, cgpa: 3.9 },
    { name: 'Khadija', gender: 'Female', sem1: 4.0, sem2: 4.0, sem3: 4.0, sem4: 4.0, sem5: 4.0, sem6: 4.0, sem7: 4.0, sem8: 4.0, cgpa: 4.0 },
    { name: 'Ali', gender: 'Male', sem1: 3.2, sem2: 3.3, sem3: 3.4, sem4: 3.5, sem5: 3.4, sem6: 3.3, sem7: 3.5, sem8: 3.6, cgpa: 3.4 },
    { name: 'Yusuf', gender: 'Male', sem1: 3.3, sem2: 3.4, sem3: 3.5, sem4: 3.6, sem5: 3.7, sem6: 3.8, sem7: 3.9, sem8: 3.8, cgpa: 3.6 },
    { name: 'Amina', gender: 'Female', sem1: 3.8, sem2: 3.7, sem3: 3.8, sem4: 3.9, sem5: 3.9, sem6: 3.8, sem7: 3.9, sem8: 4.0, cgpa: 3.9 }
  ];

  return (
    <div className="container mx-auto py-10">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 text-white">Name</th>
            <th className="px-4 py-2 text-white">Gender</th>
            <th className="px-4 py-2 text-white">Semester 1</th>
            <th className="px-4 py-2 text-white">Semester 2</th>
            <th className="px-4 py-2 text-white">Semester 3</th>
            <th className="px-4 py-2 text-white">Semester 4</th>
            <th className="px-4 py-2 text-white">Semester 5</th>
            <th className="px-4 py-2 text-white">Semester 6</th>
            <th className="px-4 py-2 text-white">Semester 7</th>
            <th className="px-4 py-2 text-white">Semester 8</th>
            <th className="px-4 py-2 text-white">CGPA</th>
          </tr>
        </thead>
        <tbody>
          {studentdata.map((student, index) => (
            <tr key={index} className="bg-gray-100 border-b">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.gender}</td>
              <td className="px-4 py-2">{student.sem1}</td>
              <td className="px-4 py-2">{student.sem2}</td>
              <td className="px-4 py-2">{student.sem3}</td>
              <td className="px-4 py-2">{student.sem4}</td>
              <td className="px-4 py-2">{student.sem5}</td>
              <td className="px-4 py-2">{student.sem6}</td>
              <td className="px-4 py-2">{student.sem7}</td>
              <td className="px-4 py-2">{student.sem8}</td>
              <td className="px-4 py-2 bg-black text-white">{student.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
