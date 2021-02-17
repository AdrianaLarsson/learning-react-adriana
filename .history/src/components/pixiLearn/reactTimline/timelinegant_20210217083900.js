import React from 'react'
import Timeline from 'react-calendar-timeline'
import moment from 'moment'

function timelinegant() {
    const groups = [
        {id: 1, title: 'group 1'},
        {id: 2, title: 'group 2'}
      ]
      
      const items = [
        {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
        {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
      ]
    return (
        <div>
         <Timeline groups={groups}
              items={items}
              defaultTimeStart={moment().add(-12, 'hour')}
              defaultTimeEnd={moment().add(12, 'hour')}
              />
        </div>
    )
}

export default timelinegant
