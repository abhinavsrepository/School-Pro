import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  return (
    <div>
      
      {/* Search Section */}
      <SearchSection/>

      {/* Temlate List Section */}
      <TemplateListSection/>
    </div>
  )
}

export default Dashboard