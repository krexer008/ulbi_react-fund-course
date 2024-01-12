import React, { useRef, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

    const [ posts, setPosts ] = useState([ { id: 1, title: 'Javascript', body: 'Description' }, {
        id: 2,
        title: 'Javascript1',
        body: 'Description'
    }, { id: 3, title: 'Javascript2', body: 'Description' }, {
        id: 4,
        title: 'Javascript3',
        body: 'Description'
    }, { id: 5, title: 'Javascript4', body: 'Description' }, ]);

    const createPost = (newPost) => {
        setPosts([ ...posts, newPost ])
    }

    // Принимаем пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (<div className="App">
        <PostForm create={ createPost }/>
        { posts.length !== 0
            ?
            <PostList remove={ removePost } posts={ posts } title="Посты про JS"/>
            :
            <h1 style={ { textAlign: 'center' } }>
                Посты не были найдены
            </h1>
        }

    </div>);
}

export default App;

// 1час 05 ми // сортировка постов