import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
};
