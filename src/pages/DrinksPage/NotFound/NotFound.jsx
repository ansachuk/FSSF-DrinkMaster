// import PropTypes from 'prop-types';

// import cocktailMob1 from '../../../images/static/drinks/cocktailMob1.png';
// import cocktailMob2 from '../../../images/static/drinks/cocktailMob2.png';
// import cocktailTabDesc1 from '../../../images/static/drinks/cocktailTabDesc1.png';
// import cocktailTabDesc2 from '../../../images/static/drinks/cocktailTabDesc2.png';

// import css from './NotFound.module.scss';

// export const NotFound = ({ message }) => {
  
//   return (
//     <div className={css.wrapper}>
//       <div className={css.image}>
//         <picture>
//           <source
//             media="(min-width: 1440px)"
//             srcSet={`${cocktailTabDesc1}, ${cocktailTabDesc2} 2x`}
//           />
//           <source
//             media="(min-width: 768px)"
//             srcSet={`${cocktailTabDesc1}, ${cocktailTabDesc2} 2x`}
//           />
//           <img
//             src={cocktailMob1}
//             srcSet={`${cocktailMob1}, ${cocktailMob2} 2x`}
//             alt="Not Found"
//           />
//         </picture>
//       </div>
//       <p className={css.message}>{message}</p>
//     </div>
//   );
// };

// NotFound.propTypes = {
//   message: PropTypes.string.isRequired,
// };