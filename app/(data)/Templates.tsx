
const templates = [
    {
        name:"Blog Title",
        desc:"An AI tool thst generate blog title depend on your blog information",
        category:"Blog",
        icon:'https://cdn-icons-png.flaticon.com/128/6422/6422215.png',
        aiPrompt:'Give me 5 blog topicidea in bullet wise only based on give niche topic and give me result in Rich text editor format',
        slug:'generate-blog-title', 
        form:[
            {
                label:"Enter your blog niche",
                field:'input',
                name:'niche',
                required:true
            }, {
                label:"Enter youtube video Outline here(optional)",
                field:'textarea',
                name:'Outline',
                required:true
            }
        ]
    },
    {
        name:"Youtube Title",
        desc:"An AI tool that will produce youtube title",
        category:"Title",
        icon:'https://cdn-icons-png.flaticon.com/128/9291/9291832.png',
        aiPrompt:'Give me 5 Tiltle topic idea in bullet wise only based on give niche topic and give me result in Rich text editor format',
        slug:'generate-blog-title', 
        form:[
            {
                label:"Enter your blog niche",
                field:'input',
                name:'niche',
                required:true
            }, {
                label:"Enter youtube video Outline here(optional)",
                field:'textarea',
                name:'Outline',
                required:true
            }
        ]
    }
]

export default templates;
