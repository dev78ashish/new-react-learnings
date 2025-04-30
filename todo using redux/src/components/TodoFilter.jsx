import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { setFilter } from '../redux/slices/TodoSlice';

function TodoFilter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.todos.filter);

  return (
    <Tabs 
      defaultValue={currentFilter} 
      value={currentFilter}
      onValueChange={(value) => dispatch(setFilter(value))}
      className="w-full mb-4"
    >
      <TabsList className="w-full grid grid-cols-3">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default TodoFilter;
