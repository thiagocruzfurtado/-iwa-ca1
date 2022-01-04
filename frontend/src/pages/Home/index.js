import React from 'react';
import Swal from 'sweetalert2';
import api from '../../services/api';
import ListPosts from '../../components/ListPosts';
import {Link} from 'react-router-dom';

function Home() {

    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        function loadPosts() {
            api.get('/posts/all').then(({ data }) => {
                setPosts(data);
            }).catch(error => {
                Swal.fire("Error!", error.message, "error");
            });
        }

        loadPosts();
    }, [])
    return (
        <main className="container">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-success">
                <div className="col-md-12 px-0">
                    <h1 className="display-4 font-italic">Welcome To The Online Diary</h1>
                    <p className="lead my-3">This is an online diary service, providing personal diaries and journals. <br/>Get Started by <Link className="text-white" to="/login">login</Link> or <Link className="text-white" to="/register">register</Link></p>
                </div>
            </div>
            <ListPosts posts={posts} />
        </main>
    );
}

export default Home;