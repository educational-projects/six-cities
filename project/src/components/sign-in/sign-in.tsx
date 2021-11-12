import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './sign-in.module.css';
import cn from 'classnames';
import { ThunkAppDispatch } from '../../types/action';
import { connect, ConnectedProps } from 'react-redux';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { State } from '../../types/state';
import { getRandomArrayElement } from '../../utils';
import { AppRoute, сitiesList } from '../../const';
import { changeCity } from '../../store/action';
import { Link } from 'react-router-dom';

const formFields = {
  email: 'E-mail',
  password: 'Password',
};

type FieldProps = {
  value: string;
  error: boolean;
  errorText: string;
  regex: RegExp;
}

type FormStateProps = {
  [key: string]: FieldProps
}

const mapStateToProps = ({authorizationStatusLoading}: State) => ({
  authorizationStatusLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },

  onclickCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignIn({onSubmit, onclickCity, authorizationStatusLoading}: PropsFromRedux): JSX.Element {
  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      errorText: 'incorrect e-mail',
      regex: /.+@.+\..+/i,
    },
    password: {
      value: '',
      error: false,
      errorText: 'incorrect password',
      regex: /^[0-9A-Za-z]{3,10}$/i,
    },
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const rule = formState[name].regex;

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
        error: !rule.test(value),
        errorText: formState[name].errorText,
      },
    });
  };

  const handleChangeCity = () => {
    onclickCity(cityButton);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      login: formState.email.value,
      password: formState.password.value,
    });
  };

  const buttonText = authorizationStatusLoading ? 'Loading...' : 'Sign in';
  const isDisabled = !formState.email.value || formState.email.error || !formState.password.value || formState.password.error;
  const cityButton = getRandomArrayElement(сitiesList);

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            {Object.entries(formFields).map(([name, label]) => {
              const inputClass = cn('login__input', 'form__input',{
                [styles.errorInput] : formState[name].error,
              });

              return (
                <div className="login__input-wrapper form__input-wrapper" key={name}>
                  <label className="visually-hidden">{label}</label>
                  {formState[name].error &&
                   <p className={styles.errorMessage}>
                     {formState[name].errorText}
                   </p>}
                  <input
                    className={inputClass}
                    type={name}
                    name={name}
                    placeholder={label}
                    value={formState[name].value}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
            <button
              className="login__submit form__submit button"
              type="submit"
              disabled={isDisabled}
            >
              {buttonText}
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.Main}>
              <span
                onClick={handleChangeCity}
              >{cityButton}
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export {SignIn};
export default connector(SignIn);
