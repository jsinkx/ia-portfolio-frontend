import React from "react"
import { useDispatch, useSelector } from "react-redux"

import classes from "./Home.module.scss"
import BusinessInfo from "./BusinessInfo/BusinessInfo"
import { fetchPosts } from "../../redux/slices/posts"
import Post from "../../components/Post/Post"
import config from '../../config.json'

const Home = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.data);
    const { posts } = useSelector((state) => state.posts);
  
    const isPostsLoading = posts.status === 'loading';
  
    React.useEffect(() => {
      dispatch(fetchPosts());
    }, []);
  

    return (
        <>
            <div className={classes.backgroundWrap}>
                <div className={classes.backgroundFirst}></div>
                <div className={classes.backgroundSecond}>
                </div>
            </div>
            <div className={classes.contentSection}>
                <BusinessInfo/>
                <div className={classes.workSection}> 
                    <p className={classes.pTitle}> МОИ ДОСТИЖЕНИЯ </p>
                    {(isPostsLoading ? [...Array(2)] : posts.items).map((obj, index) => 
                        isPostsLoading ? (
                            <Post key={index} isLoading={true} />
                        ) : (<Post
                                id={obj._id}
                                title={obj.title}
                                isEditable={userData?._id === obj.user._id}
                            />)
                    )}
                </div>
            </div>
        </>
    )
}

export default Home