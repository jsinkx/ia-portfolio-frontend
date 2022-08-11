import React from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';


import { fetchRemovePost } from "../../redux/slices/posts"
import classes from "./Post.module.scss"
import config from  "../../config.json"

const Post = ({
    id,
    title,
    children,
    backgroundImageUrl,
    images,
    isEditable,
    isFullPost
}) => {
    const dispatch = useDispatch()
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить статью ?')) {
            dispatch(fetchRemovePost(id))
            window.location.reload(false)
        } 
    }    

    const bgrImgStyle = {
      marginTop: '-150px',
      width: '100%',
      height: '200px',
      backgroundImage: (backgroundImageUrl ? 'url(' + backgroundImageUrl + ')' : 'none'),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundColor: randomColor,
      userSelect: 'none',
    };

    return( (isFullPost ? (
      <>
        <div style={bgrImgStyle}></div>
        <div className={classes.postBox}>
          <h2> {title} </h2>
          <div className={classes.content}>
            {children}
            {(images && images.length > 0? (
                <div className={classes.postImages}>
                {images.map((imageAdress) => {
                  return <>
                      <img src={`${config.adress}${imageAdress}`}/>
                  </>
                })}
              </div>
            ) : '')}
          </div>
        </div>
      </>
    ) : (
          <NavLink to={`/posts/${id}`} className={classes.projNav}>
              <div className={classes.project}>
                  {(isEditable ? (
                    <div className={classes.editButtons}>
                      <NavLink to={`/posts/${id}/edit`}>
                        <IconButton color="primary">
                          <EditIcon />
                        </IconButton>
                      </NavLink>
                      <IconButton onClick={onClickRemove} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ) : '' )} {title} </div>
          </NavLink>
        ))
    )
}

export default Post