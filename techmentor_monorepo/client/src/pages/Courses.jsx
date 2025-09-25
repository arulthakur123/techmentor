import React, {useEffect, useState} from 'react'
export default function Courses(){
  const [courses, setCourses] = useState([]);
  useEffect(()=>{ fetch('/api/courses').then(r=>r.json()).then(setCourses).catch(()=>{}) },[]);
  return (
    <section>
      <h2>Courses</h2>
      <div className="cardgrid" style={{marginTop:12}}>
        {courses.length>0 ? courses.map(c=>(
          <div className="course" key={c._id}>
            <h3>{c.title}</h3>
            <p style={{color:'#9fb0c8'}}>{c.summary}</p>
            <p style={{fontSize:13}}><strong>Includes:</strong></p>
            <ul style={{color:'#9fb0c8'}}>
              {c.syllabus && c.syllabus.map((s,i)=><li key={i}>{s}</li>)}
            </ul>
            <p style={{fontSize:13}}><strong>Duration:</strong> {c.duration} • <strong>Price:</strong> {c.price}</p>
            <div style={{marginTop:10}}>
              <a className="btn" href="mailto:you@yourdomain.com">Enroll / Contact</a>
            </div>
          </div>
        )) : <p style={{color:'#9fb0c8'}}>No courses found. Seed DB after deployment.</p>}
      </div>
    </section>
  )
}
