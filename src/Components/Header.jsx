
import React, { useState } from "react"
import Logo from "../assets/Images/AstroLogo.png"
import Cloud from '../assets/Images/C1.png'
import { useNavigate } from "react-router-dom";



export function Header() {

   const [split, setSplit] = useState(false);
   const [islogo, setIsLogo] = useState(true);
   const [showContent, setShowContent] = useState(false);

   const navigate = useNavigate();

  // const handleEvent = () => {
  //    setSplit(true)
  //    setIsLogo(!islogo)
  // }

  const handleEvent = () => {
  setSplit(true);

  setTimeout(() => {
    setIsLogo(false);
   
  }, 2000); 

   setShowContent(true);
};


   return (
      <>

         <div className="header" >

             <div className="hero-content" style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 4
                  
               }} >

                  {islogo ? (
  <div>
    <h3 className="head1">Click the logo</h3>
    <div className="logo">
      <img
        onClick={handleEvent}
        className="astrologo"
        src={Logo}
        alt=""
      />
    </div>
    <h1 className="head2 text-black">
      ASTRRONOVAS SCHOOL OF MMYSTIICS
    </h1>
  </div>
) : (
  showContent && (
    <div className="centerContent">
      <h1 className="heroTextSmall">STOP . BREATH . HEAL</h1>
      <h1 className="heroTextBig">ALCHEMISE</h1>

      <div className="buttons">
        <button className="btn1">Shopping</button>
        <button onClick={()=> navigate("/courses")} className="btn2">Courses</button>
      </div>
    </div>
  )
)}

                 
                  
               </div>


           <div
               className="cloudWrapper"
               style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2
               }}
               >
               <img src={Cloud} className={`cloud cloud-Top_2 ${split ? "move-top" : ""}`} alt="top-cloud" />
             
               <img src={Cloud} className={`cloud cloud-Top ${split ? "move-top" : ""}`} alt="top-cloud" />

               {/* <img src={Cloud} className={`cloud cloud-Bottom ${split ? "move-bottom" : ""}`} alt="bottom-cloud" /> */}

               <img src={Cloud} className={`cloud cloud-left ${split ? "move-left" : ""}`} alt="left-cloud" />

               <img src={Cloud} className={`cloud cloud-right ${split ? "move-right" : ""}`} alt="right-cloud" />

               <img src={Cloud} className={`cloud top-right ${split ? "move-top-right" : ""}`} alt="top-right-cloud" />

               <img src={Cloud} className={`cloud top-left ${split ? "move-top-left" : ""}`} alt="top-left-cloud" />

               <img src={Cloud} className={`cloud bottom-right ${split ? "move-bottom-right" : ""}`} alt="bottom-right-cloud" />

               <img src={Cloud} className={`cloud bottom-left ${split ? "move-bottom-left" : ""}`} alt="bottom-left-cloud" />

               <img src={Cloud} className={`cloud hero-left ${split ? "move-hero-bottom-left" : ""}`} alt="hero-left-cloud" />

               <img src={Cloud} className={`cloud hero-right ${split ? "move-hero-bottom-right" : ""}`} alt="hero-right-cloud" />
            </div>

         </div>
      </>
   )
}


export default Header