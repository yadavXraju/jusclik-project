import React from 'react'
import FavPages from 'component/FavPages'
import { FavPagesList } from 'views/class-teacher-dashboard/fav-pages/FavPagesList'

const SubjectTeacherFavPages = () => {
  return (
    <>
      <FavPages FavPagesList={FavPagesList}/>
    </>
  )
}

export default SubjectTeacherFavPages