import React, { useState, useEffect } from "react"
import "./NasaPhoto.css"

const apiKey = process.env.REACT_APP_API_KEY

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null)

  useEffect(() => {
    fetchPhoto()
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      )
      const data = await res.json()
      console.log(data)
      setPhotoData(data)
    }
  }, [])

  if (!photoData) return <div />

  return (
    <div className="nasaphoto_bg">
      <div className="nasaphoto_container">
        <div className="nasaphoto_title">
          <h1>{photoData.title}</h1>
          <h3>Date: {photoData.date}</h3>
        </div>
        <div className="nasaphoto_img">
          {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} />
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-embed"
              allowFullScreen
              className=""
            />
          )}
        </div>
        <div className="nasaphoto_subtitle">
          <h2>DESCRIPTION</h2>
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </div>
  )
}

export default NasaPhoto
