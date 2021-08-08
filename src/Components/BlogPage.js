import React, { useContext, useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { User } from '../App';

function BlogPage() {
    const { id } = useParams();
    const history = useHistory();

    const user = useContext(User);
    const [admin, setAdmin] = useState()

    useEffect(() => {
        setAdmin(user);

    }, [user]);
    console.log(admin);



    const { data: post } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);  

    const deletePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
    }).then(()=>{
        alert('Deleted!');
        history.push('/');
    });
       
};
    
    return (
        <div className="content">
            {post && (
                <>
                    {' '}
                    <img src="https://picsum.photos/500/400" alt="header" />
                    <div className="header-text">
                        <h1>{post.title}</h1>
                        <div className="btn-section">
                            {admin ? <button className="delete" onClick={deletePost}>Delete</button> : <></>}
                        </div>
                    </div>
                    <p>{post.userId}</p>
                    <div className="text-content">
                        <p>{post.body}</p>
                    </div>
                </>
            )}
            
        </div>
    );
}

export default BlogPage;
