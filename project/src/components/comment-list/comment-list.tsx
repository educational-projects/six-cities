import { connect, ConnectedProps } from 'react-redux';
import CommentForm from '../../components/comment-form/comment-form';
import Comment from '../../components/comment/comment';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';

const mapStateToProps = ({comments, authorizationStatus}: State) => ({
  comments,
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CommentList({comments, authorizationStatus}: PropsFromRedux): JSX.Element {
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
      {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm/> : ''}
    </section>
  );
}

export {CommentList};
export default connector(CommentList);
