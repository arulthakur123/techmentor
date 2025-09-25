require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// simple models
const MentorSchema = new mongoose.Schema({
  name:String, title:String, bio:String, photoUrl:String, highlights:[String]
});
const CourseSchema = new mongoose.Schema({
  title:String, summary:String, duration:String, price:String, syllabus:[String], slug:String
});
const ContactSchema = new mongoose.Schema({
  name:String, email:String, message:String, createdAt:{type:Date, default:Date.now}
});

const Mentor = mongoose.model('Mentor', MentorSchema);
const Course = mongoose.model('Course', CourseSchema);
const Contact = mongoose.model('Contact', ContactSchema);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/techmentor';

mongoose.connect(MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/health', (req,res)=> res.json({ ok:true, ts: Date.now() }));

// seed endpoint (one-time) to create sample mentors and courses (remove after use)
app.post('/api/seed', async (req,res)=>{
  try{
    await Mentor.deleteMany({});
    await Course.deleteMany({});
    const mentors = await Mentor.insertMany([
      { name:'Arul Thakur', title:'Lead Trader & Mentor', bio:'10+ years trading equity, options & algos. Focus on risk-managed strategies.', photoUrl:'/mentor1.jpg', highlights:['10+ years trading','Options specialist','Systematic risk management']},
      { name:'Co Mentor', title:'Senior Analyst', bio:'Experienced market analyst & educator with focus on technicals and macro.', photoUrl:'/mentor2.jpg', highlights:['Macro insights','Technical analysis','Live trade reviews']}
    ]);
    const courses = await Course.insertMany([
      { title:'Beginner to Pro Trading Blueprint', summary:'From market basics to edge-building and risk control.', duration:'8 weeks', price:'Contact for pricing', syllabus:['Market basics','Technical analysis','Options starter','Risk management'], slug:'beginner-pro' },
      { title:'Advanced Options & Strategies', summary:'Options strategies for income and hedging.', duration:'6 weeks', price:'Contact for pricing', syllabus:['Greeks & risk','Spreads','Gamma scalping','Position sizing'], slug:'options-advanced' }
    ]);
    res.json({ok:true, mentors, courses});
  }catch(err){ res.status(500).json({error:err.message}); }
});

// data endpoints
app.get('/api/mentors', async (req,res)=>{
  const mentors = await Mentor.find({});
  res.json(mentors);
});
app.get('/api/courses', async (req,res)=>{
  const courses = await Course.find({});
  res.json(courses);
});
app.post('/api/contact', async (req,res)=>{
  const {name,email,message} = req.body;
  if(!name || !email || !message) return res.status(400).json({error:'Missing fields'});
  const doc = await Contact.create({name,email,message});
  res.json({ok:true, id:doc._id});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log('Server listening on', PORT));
