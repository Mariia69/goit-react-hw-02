import css from './Options.module.css';

export default function Options({
  updateFeedback,
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
            onClick={() => updateFeedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.optionsButton}
            onClick={() => updateFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.optionsButton}
            onClick={() => updateFeedback('bad')}
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
