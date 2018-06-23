let h = React.createElement;

const posts = [
{Title: "This is a blog post", 
post : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
author : 'Some Guy'},
{Title: "This is a blog post", 
post : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
author : 'Some Guy'},
{Title: "This is a blog post", 
post : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
author : 'Some Guy'},
{Title: "This is a blog post", 
post : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
author : 'Some Guy', featured: true},
{Title: "This is a blog post", 
post : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
author : 'Some Guy', featured: true}
]

let postRow = (post) =>         
            [h('h5', {className: 'card-title bg-dark text-white'},  `${post.Title}`),
            h('h6', {className: 'card-subtitle text-muted bg-dark text-white'},  `by ${post.author}`),
            h('div', {className: 'mb-3 card-body bg-dark text-white'},  `${post.post}`)]

let postList = (props) =>
     h('div', {className: 'card-body'}, props.posts.map(post => h(postRow, post)))



let container = 
h('main', {className: 'container'}, [
    h('h1', {className: 'bg-dark text-light text-center'}, 'My blog'), 
    h('div', {className: 'bg-warning text-dark'}, 
        [
        h('h2', null ,'Featured'), 
        h(postList, {posts: posts.filter(post => post.featured)})
        ]),
    h(postList,{posts: posts}),
    h('footer', null, 'Copyright 2018'),
]);

ReactDOM.render(
    container, 
    document.querySelector('.react-root')
    );
