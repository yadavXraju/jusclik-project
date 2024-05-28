import React from 'react'
import withParamDrawer from 'components/temp-withParamDrawer';
import HomeworkDrawerContent from './HomeworkDrawerContent';

const NewParamDrawer=withParamDrawer(HomeworkDrawerContent);
function HomeworkDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel='Send Homework' drawerTitle='Homework' />
    </div>
  )
}

export default HomeworkDrawer