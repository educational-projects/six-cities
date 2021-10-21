import { FormEvent, useState, ChangeEvent } from 'react';
import { ratingStarSetting } from '../../const';
import RatingStar from '../rating-star/rating-star';

function CommentForm(): JSX.Element {
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
  };

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
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
