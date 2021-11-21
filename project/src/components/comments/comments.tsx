import { useSelector } from 'react-redux';
import CommentForm from '../comment-form/comment-form';
import Comment from '../comment/comment';
import { AuthorizationStatus } from '../../const';
import { getSortedUpDays } from '../../utils';
import { getComments } from '../../store/comments/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';

const MAX_COUNT_COMMENTS = 10;

function Comments(): JSX.Element {
  const comments = useSelector(getComments);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const commentsList = getSortedUpDays(comments).slice(0, MAX_COUNT_COMMENTS);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {commentsList.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm/>}
    </section>
  );
}

export default Comments;
