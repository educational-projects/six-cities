import CommentForm from '../../components/comment-form/comment-form';
import Comment from '../../components/comment/comment';
import { UsersComments } from '../../types/comment';

type CommentListProps = {
comments: UsersComments
}

function CommentList({comments}: CommentListProps): JSX.Element {
  const commentsCount = comments.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsCount}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
          />
        ))}
      </ul>
      <CommentForm/>
    </section>
  );
}

export default CommentList;
