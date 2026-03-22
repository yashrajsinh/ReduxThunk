import React from 'react';
import { FlatList } from 'react-native';

//redux selector
import { useSelector } from 'react-redux';
//Compoent
import TaskCard from '../TaskCard/TaskCard';

export default function TaskView() {
  const tasks = useSelector((state: any) => state);
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <TaskCard item={item} index={index} />}
    />
  );
}
