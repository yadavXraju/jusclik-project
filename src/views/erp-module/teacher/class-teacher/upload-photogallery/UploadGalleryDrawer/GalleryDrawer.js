import React from 'react'
import withParamDrawer from 'components/temp-withParamDrawer';
import CreateNewDetails from './CreateNewDetails';
const NewParamDrawer=withParamDrawer(CreateNewDetails);
function GalleryDrawer() {
  return (
    <div>
      <NewParamDrawer buttonLabel='Upload Photo Gallery' drawerTitle='Upload Photo Gallery' />
    </div>
  )
}

export default GalleryDrawer;