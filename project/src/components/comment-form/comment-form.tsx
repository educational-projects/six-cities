import { FormEvent, useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';
import { ratingStarSetting } from '../../const';
import { sendCommentsAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { CommentData } from '../../types/comment';
import { State } from '../../types/state';
import RatingStar from '../rating-star/rating-star';

const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;

const mapStateToProps = ({sendcommentsLoading}: State) => ({
  sendcommentsLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onsubmit({id, rating, comment}: CommentData) {
    dispatch(sendCommentsAction({id, rating, comment}));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CommentForm({sendcommentsLoading, onsubmit}: PropsFromRedux): JSX.Element {
  const { id } = useParams() as { id: string};

  const [formState, setFormState] = useState({
    review: '',
    rating: '0',
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onsubmit({id: id, rating: formState.rating, comment: formState.review});
  };

  const buttonText = sendcommentsLoading ? 'Submiting...' : 'Submit';

  const isDisabled = formState.rating === '0'
   || formState.review.length < MIN_LENGTH_COMMENT
   || sendcommentsLoading
   || formState.review.length > MAX_LENGTH_COMMENT;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitForm}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(ratingStarSetting).reverse().map((number) => (
          <RatingStar
            number={number}
            key={number}
            title={ratingStarSetting[number]}
            value={formState.rating}
            onChange={handleChange}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          {' '}
          <span className="reviews__star">rating</span>
          {' '}
          and describe your stay with at least
          {' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export {CommentForm};
export default connector(CommentForm);
