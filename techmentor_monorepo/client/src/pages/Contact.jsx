import React, {useState} from 'react'
export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''});
  const [status, setStatus] = useState('');
  const submit = async (e)=>{
    e.preventDefault();
    setStatus('Sending...');
    try{
      const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const data = await res.json();
      if(data.ok) setStatus('Message sent — we will contact you soon.');
      else setStatus('Error: ' + (data.error||'unknown'));
    }catch(err){ setStatus('Network error'); }
  }
  return (
    <section>
      <h2>Contact / Enroll</h2>
      <form className="form" onSubmit={submit}>
        <input className="input" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <textarea className="textarea" rows="6" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}></textarea>
        <button className="btn" type="submit">Send</button>
        <div style={{color:'#9fb0c8',marginTop:8}}>{status}</div>
      </form>
    </section>
  )
}
