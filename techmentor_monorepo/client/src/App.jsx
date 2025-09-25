import React, {useEffect, useState} from 'react'
import Home from './pages/Home'
import Mentors from './pages/Mentors'
import Courses from './pages/Courses'
import Contact from './pages/Contact'

export default function App(){
  const [route, setRoute] = useState(window.location.pathname);
  useEffect(()=>{
    const onPop = ()=> setRoute(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return ()=> window.removeEventListener('popstate', onPop);
  },[]);
  const nav = (path)=>{
    window.history.pushState({}, '', path);
    setRoute(path);
  }
  return (
    <div>
      <header className="topbar">
        <div className="brand" onClick={()=>nav('/')}>TechMentor</div>
        <nav>
          <button onClick={()=>nav('/mentors')}>Mentors</button>
          <button onClick={()=>nav('/courses')}>Courses</button>
          <button onClick={()=>nav('/contact')}>Contact</button>
        </nav>
      </header>
      <main>
        {route === '/' && <Home onNav={nav} />}
        {route === '/mentors' && <Mentors />}
        {route === '/courses' && <Courses />}
        {route === '/contact' && <Contact />}
      </main>
      <footer className="sitefoot">© TechMentor</footer>
    </div>
  )
}
