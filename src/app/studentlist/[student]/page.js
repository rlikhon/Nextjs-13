"use client"
export default function Student({params}) {
    console.log("Student List", params);

    return (
        <div>
            <h1>Student Details Page</h1>
            <h2>Student Name: {params.student}</h2>
            <a href="/studentlist">Back to Student List</a>
        </div>
      );
}