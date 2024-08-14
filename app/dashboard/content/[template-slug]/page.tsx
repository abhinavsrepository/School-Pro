import React from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent (props:PROPS) {
    console.log(props.params ['template-slug'])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 '>
      {/* FormSection */}
      <FormSection/>
    {/* outsection */}
    <OutputSection/>
    </div>
  )
}

export default CreateNewContent
