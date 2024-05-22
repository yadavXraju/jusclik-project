// ======= Page Owner Vikash =========
import React from 'react'
import withParamDrawer from 'views/common-section/withParamDrawer';
import LeaveApplicationDrawerContent from './LeaveApplicationDrawerContent';

const NewParamDrawer=withParamDrawer(LeaveApplicationDrawerContent);
function ExpensesDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel='Leave Application' drawerTitle='Request Leave' />
    </div>
  )
}

export default ExpensesDrawer