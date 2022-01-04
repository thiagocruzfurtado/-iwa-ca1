import React from 'react';
import Swal from 'sweetalert2';
import api from '../../services/api';

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
                    <p className="lead my-3">This is an online diary service, providing personal diaries and journals.</p>
                </div>
            </div>

        </main>
    );
}

export default Home;