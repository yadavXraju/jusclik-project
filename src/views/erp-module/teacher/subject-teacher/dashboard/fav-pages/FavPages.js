import React from 'react'
import FavPages from 'views/common-section/FavPages'
import { FavPagesList } from 'views/class-teacher-dashboard/fav-pages/FavPagesList'

const SubjectTeacherFavPages = () => {
  return (
    <>
      <FavPages FavPagesList={FavPagesList}/>
    </>
  )
}

export default SubjectTeacherFavPages