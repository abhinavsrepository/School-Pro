"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import {TEMPLATE} from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Link } from 'lucide-react'
interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent (props:PROPS) {
   const selectedTemplate:TEMPLATE|undefined= Templates?.find((item)=>item.slug==props.params['template-slug']);
   const [loading,setLoading]=useState(false);
   const  GenerateAIContent =(formData:any)=>{

   }
  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
      <Button ><ArrowLeft/>Back</Button>
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 '>
      {/* FormSection */}
      <FormSection selectedTemplate={selectedTemplate}
      userFormInput={(v:any )=>console.log(v)}
      loading={loading}/>
    {/* outsection */}
    <div className='col-span-3'>
    <OutputSection/>
    </div>
    </div>
    </div>
  )
}

export default CreateNewContent
