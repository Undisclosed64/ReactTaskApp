import React from 'react';


const Overview = (props) => {
    const { tasksArr } = props;

        return (
              <ul>
                  {tasksArr.map((task) => {
                      return <li key={task.id}>{task.text}</li>
                  })}
              </ul>
        );
                };
    export default Overview;
