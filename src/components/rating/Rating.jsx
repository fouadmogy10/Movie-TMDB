import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css"
const Rating = ({rating,width}) => {
  return (
    <div className="circleRating bg-primary">
    <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating !==0 ?rating :"0.0"}
        styles={buildStyles({
            pathColor:
                rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
        className={` w-[70px]`}
    />
</div>
  )
}

export default Rating