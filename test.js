const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb+srv://krammer439298:PU1fIa7hVrYikK9B@cluster0.eyokj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true});

// var id = "605d16b1b0e8f94779dacaea"

BlogPost.findByIdAndDelete(id,{
    title:'updated title'
},(error,blogspot)=>{
    console.log(error,blogspot)
})

BlogPost.create({
    title: 'Web Development part 2',
    body: 'using javascript and node.js, also bootstrap'
}, (error, blogpost) => {
    console.log(error,blogpost)
})