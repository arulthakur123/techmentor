import React, {useEffect, useState} from 'react'
export default function Mentors(){
  const [mentors, setMentors] = useState([]);
  useEffect(()=>{ fetch('/api/mentors').then(r=>r.json()).then(setMentors).catch(()=>{}) },[]);
  return (
    <section>
      <h2>Meet the Mentors</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginTop:16}}>
        {mentors.length>0 ? mentors.map(m=>(
          <div key={m._id} className="course">
            <div className="mentor">
              <img src={m.photoUrl} alt={m.name} />
              <div>
                <h3 style={{margin:0}}>{m.name}</h3>
                <p style={{color:'#9fb0c8',margin:'4px 0'}}>{m.title}</p>
                <p style={{margin:0,color:'#cfe5ff'}}>{m.bio}</p>
                <ul style={{color:'#9fb0c8',marginTop:8}}>
                  {m.highlights && m.highlights.map((h,i)=><li key={i}>{h}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )) : <p style={{color:'#9fb0c8'}}>No mentors found. Seed the DB after deployment.</p>}
      </div>
    </section>
  )
}
