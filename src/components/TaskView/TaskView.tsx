import React from 'react';
import { FlatList } from 'react-native';

//handle redux
import { useDispatch, useSelector } from 'react-redux';
//Compoent (Cardview)
import TaskCard from '../TaskCard/TaskCard';

//show list bsaed on state
export default function TaskView({ type = 'active' }) {
  const dispatch = useDispatch();
  //if complted show completed task if not active tasks
  const tasks = useSelector((state: any) =>
    type === 'completed' ? state.completedTasks : state.activeTasks,
  );

  //handle logic
  const handleToggle = id => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: id,
    });
  };

  const showCheckbox = type === 'active';
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <TaskCard
          item={item}
          index={index}
          onToggle={handleToggle}
          showCheckbox={showCheckbox}
        />
      )}
    />
  );
}
