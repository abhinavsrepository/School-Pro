
const templates = [
    {
        name:"Blog Title",
        desc:"An AI tool thst generate blog title depend on your blog information",
        category:"Blog",
        icon:'https://www.flaticon.com/free-icon-font/youtube_6422215?page=1&position=1&term=youtube&origin=search&related_id=6422215',
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
        icon:'BlogIcon',
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
