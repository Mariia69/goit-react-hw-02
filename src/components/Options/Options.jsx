import css from './Options.module.css';

export default function Options({
  feedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div>
      <ul className={css.optionsList}>
        <li>
          <button
            type="button"
            className={css.optionsButton}
            onClick={() => feedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.optionsButton}
            onClick={() => feedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.optionsButton}
            onClick={() => feedback('bad')}
          >
            Bad
          </button>
        </li>
        <li>
          {totalFeedback !== 0 && (
            <button
              type="button"
              className={css.optionsButton}
              onClick={resetFeedback}
            >
              Reset
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
