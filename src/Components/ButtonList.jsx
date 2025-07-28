import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttons = ["All","Trailers","Kapil Sharma","Thrillers","Music","Podcasts","Dramedy","News","Shah Rukh Khan","Raghav Juyal","Satire","Awards","Anirudh Ravichander","Auditions","Comedy clubs","JavaScript","Theatre","Indian Music","Recently uploaded","Watched","New to you"]
  return (
    <div className='overflow-y-auto'>
      <div className="inline-flex gap-2">
      <Button className="w-max" buttons={buttons} />
      </div>
    </div>
  )
}

export default ButtonList