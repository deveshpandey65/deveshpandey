import React from 'react'

export default function Achievement() {
    const AchievementList = [
        { Head: 'UDBHAV, Cohort 1.0 ', Detail: 'UDBHAV, Cohort 1.0 event at Motilal Nehru National Institute of Technology (MNNIT), Prayagraj. Secured the Third position in the cohort 1.0 at UDBHAV 2023, organized by the Institution’s Innovation Council (IIC), MNNIT ALLAHABAD, supported by Innovation and Incubation Hub MNNIT Foundation, for developing and presenting an innovative solution addressing household issues. ' },
        { Head: 'U HACK 2.0 (Hackathon) ', Detail: 'U HACK 2.0 (Hackathon) at United College of Engineering and Research, Prayagraj. Achieved a position in the top 10 out of 100 teams for creating a website aimed at resolving Locality-based issues ' }
    ];
  return (
      <div className='Achievement'>
          <div className='contactd'>
              <h1>Achievement</h1>  </div>
          <div className='lowerAchievement'>
              {AchievementList.map((res, idx) => (
                  <div className='Achievementblock' key={idx}>
                      <h1>{res.Head}</h1>
                      <p>{res.Detail}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
