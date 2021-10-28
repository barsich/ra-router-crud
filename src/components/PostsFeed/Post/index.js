import { Link } from 'react-router-dom';

export default function Post({ post }) {
  const { id, created, content } = post;
  return (
    <Link to={`/posts/${id}`} className="post-link-wrapper">
      <div className="post">
        <div className="post-body">
          <p className="post-date">{new Date(created).toLocaleString('ru')}</p>
          <p className="post-content">{content}</p>
        </div>
        {/* <div className="post-footer">
          <button className="edit-button button">Изменить</button>
          <button className="delete-button button">Удалить</button>
        </div> */}
      </div>
    </Link>
  );
}
