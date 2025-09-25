import React, {useEffect, useState} from 'react'
export default function Home({onNav}){
  const [courses, setCourses] = useState([]);
  useEffect(()=>{ fetch('/api/courses').then(r=>r.json()).then(setCourses).catch(()=>{}) },[]);
  return (
    <section>
      <div className="hero">
        <div className="left">
          <h1>Master Stock Market Trading with Expert Mentorship</h1>
          <p>Live mentorship, practical strategies, and portfolio-friendly approaches.</p>
          <div>
            <a className="cta" href="#" onClick={(e)=>{e.preventDefault(); onNav('/courses')}}>Explore Courses</a>
            <a className="cta" href="#" style={{background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'#cfe5ff'}} onClick={(e)=>{e.preventDefault(); onNav('/contact')}}>Book a Call</a>
          </div>
        </div>
        <div className="right" style={{width:360}}>
          <div style={{background:'#071730',padding:18,borderRadius:12}}>
            <h3 style={{marginTop:0}}>Why join?</h3>
            <ul style={{color:'#9fb0c8'}}>
              <li>Real trades, risk-first approach</li>
              <li>Small batch mentorship</li>
              <li>Live trade reviews & community</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 style={{marginTop:28}}>Featured Courses</h2>
      <div className="cardgrid">
        {courses.length>0 ? courses.map(c=>(
          <div className="course" key={c._id}>
            <h3>{c.title}</h3>
            <p style={{color:'#9fb0c8'}}>{c.summary}</p>
            <p style={{fontSize:13}}><strong>Duration:</strong> {c.duration} • <strong>Price:</strong> {c.price}</p>
            <div style={{marginTop:10}}>
              <button className="btn" onClick={()=> onNav('/courses')}>View</button>
            </div>
          </div>
        )) : <p style={{color:'#9fb0c8'}}>No courses loaded. After deployment, call the seed endpoint or add courses in DB.</p>}
      </div>
    </section>
  )
}
