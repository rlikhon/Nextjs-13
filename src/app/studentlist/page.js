import Link from "next/link";

export default function Studentlist() {
    const data = [
        {id:1, name:"Likhon"},
        {id:2, name:"Rony"},
        {id:3, name:"Sakib"},
    ];
    return (
        <div>
            <h1>Student List</h1>
            <a href="/">Back to Home</a>
            <ul>
                {data.map((student) => (
                    <li key={student.id}><Link href={`/studentlist/${student.name}`}>{student.name}</Link></li>
                ))}
            </ul>
        </div>
      );
}