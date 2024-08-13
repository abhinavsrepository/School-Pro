// /export default [
//     {
//         name:"Blog Title",
//         desc:"An AI tool thst generate blog title depend on your blog information",
//         category:"Blog",
//         icon:'BlogIcon',
//         aiPrompt:'Give me 5 blog topicidea in bullet wise only based on give niche topic and give me result in Rich text editor format',
//         slug:'generate-blog-title', 
//         form:[
//             {
//                 label:"Enter your blog niche",
//                 field:'input',
//                 name:'niche',
//                 required:true
//             }
//         ]
//     }

const templates = [
    {
        name:"Blog Title",
        desc:"An AI tool thst generate blog title depend on your blog information",
        category:"Blog",
        icon:'BlogIcon',
        aiPrompt:'Give me 5 blog topicidea in bullet wise only based on give niche topic and give me result in Rich text editor format',
        slug:'generate-blog-title', 
        form:[
            {
                label:"Enter your blog niche",
                field:'input',
                name:'niche',
                required:true
            }
        ]
    }
]

export default templates;
