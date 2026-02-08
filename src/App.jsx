
import React from "react"
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home'
import Courses from "./Pages/Courses"
import CourseList from "./Pages/CourseList"
import './App.css'

function App() {
  

  return (
    <>

      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/course-list" element={<CourseList/>} />



      </Routes>

     
    </>
  )
}

export default App
