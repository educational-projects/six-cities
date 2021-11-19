import { FormEvent, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ratingStarSetting } from '../../const';
import { sendCommentsAction } from '../../store/api-actions';
import { getSendcommentsLoading } from '../../store/comments/selectors';
import RatingStar from '../rating-star/rating-star';

const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;

function CommentForm(): JSX.Element {
  const sendcommentsLoading = useSelector(getSendcommentsLoading);

  const { id } = useParams<{ id: string}>();

  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    review: '',
    rating: '0',
  });

  const handleChangeForm = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(sendCommentsAction({
      id,
      rating: formState.rating,
      comment: formState.review,
    }));
  };

  const buttonText = sendcommentsLoading ? 'Submitting...' : 'Submit';

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
            onChange={handleChangeForm}
          />))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review}
        onChange={handleChangeForm}
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

export default CommentForm;
