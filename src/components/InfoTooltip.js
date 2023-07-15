import success from '../images/success.png';
import fail from '../images/fail.png';

function InfoTooltip({ title, icon, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_infotooltip ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        {icon === 'success' && (
          <img className='popup__icon' src={success} alt='success' />
        )}
        {icon === 'fail' && (
          <img className='popup__icon' src={fail} alt='fail' />
        )}
        <h2 className='popup__title-infotooltip'>{title}</h2>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
