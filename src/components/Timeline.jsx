import React from 'react'
import "../styles/timeline.css"


const Timeline = () => {
  const events = [
    {
      side: 'left',
      title: 'Event 1',
      content: 'Lorem ipsum dolor sit amet.',
      month: 'JUNE',
      date: '29',
    },
    {
      side: 'right',
      title: 'Event 2',
      content: 'Consectetur adipisicing elit.',
      month: 'JULY',
      date: '10',
    },
    {
      side: 'left',
      title: 'Event 3',
      content: 'Sed do eiusmod tempor incididunt.',
      month: 'AUG',
      date: '5',
    },
  ]



  return (
    <div className='timeline'>
      

      <div className='timeline-line'></div>
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          side={event.side}
          title={event.title}
          content={event.content}
          month={event.month}
          date={event.date}
        />
      ))}
    </div>
  )
}

// TimelineItem Component
const TimelineItem = ({ side, title, content, month, date }) => {
  return (
    <div className={`timeline-item ${side}`}>
      {/* <div className='connector'>   */}
      {/* </div> */}
      <div className='parent'>
        <div className='card'>
          <div className='content-box'>
            <span className='card-title'>{title}</span>
            <p className='card-content'>{content}</p>
            <span className='see-more'>See More</span>
          </div>
          <div className='date-box'>
            <span className='month'>{month}</span>
            <span className='date'>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Timeline Component (Main)


export default Timeline
