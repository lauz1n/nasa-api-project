import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import { IoIosRocket } from "react-icons/io"

const Home = () => {
  return (
    <div className="home_bg">
      <div className="home_title">
        <h1>EXPLORE THE</h1>
        <p className="home_paragraph">UNKNOWN</p>
      </div>

      <div className="home_link_container">
        <Link to="/nasaphoto" className="home_link">
          <IoIosRocket />
        </Link>
      </div>
    </div>
  )
}

export default Home
