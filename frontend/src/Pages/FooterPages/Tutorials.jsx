import React, { useState } from 'react';
import './FooterPages.css';
import { v4 as uuidv4 } from 'uuid';

const Tutorials = () => {
  const uniqueId = uuidv4();
  const [videos] = useState([
    {
      id: uniqueId,
      videoId: "FIak2R1tFHI",
      title: "3 Easy Chiffon Hijab Style (Habiba DaSilva)",
    },
    {
      id: uniqueId,
      videoId: "Yf-wqWHB_mI",
      title: "QUICK AND EASY HIJAB STYLES! | Cotton, Jersey & Chiffon Tutorial! (Jasemine & Dawoud)",
    },
    {
      id: uniqueId,
      videoId: "QF8hoF-1SjA",
      title: "4 EASY HIJAB STYLES - TUTORIAL 2021 (Sabina Hannan)",
    },
    {
      id: uniqueId,
      videoId: "mw5BYaoGmC8",
      title: "Everyday Hijab Tutorial & How I Do My Underscarf! (Leena Snoubar)",
    }
  ]);

  return (
    <div className='text-container'>
      {
        videos.map(video =>(
          <section>
            <h3>{video.title}</h3>
            <div className='video-container'>
              <iframe src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0`} title={video.title} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </section>
        ))
      }
    </div>
  )
}

export default Tutorials
